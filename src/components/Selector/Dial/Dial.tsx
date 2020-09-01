import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Options from "./Options/Options";
import { useThrottle } from "../../../hooks/useThrottle";
import { useDebounce } from "../../../hooks/useDebounce";

const Root = styled.div`
  display: flex;
`;

const Outline = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: #97a6ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutlineHighlight = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background: #3553ff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0px 10px #4863ff;
`;

const Bevel = styled.div`
  height: 186px;
  width: 186px;
  border-radius: 93px;
  background: linear-gradient(315deg, #000, #888);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  height: 176px;
  width: 176px;
  border-radius: 88px;
  background: linear-gradient(315deg, #222 1%, #ccc 80%);
  position: relative;
`;

const MarkerContainer = styled.div.attrs((props: { angle: number }) => ({
  angle: props.angle || 0,
}))`
  height: 176px;
  width: 176px;
  border-radius: 88px;
  background: transparent;
  position: relative;
  transform: rotate(${(props) => props.angle}deg);
`;

const MarkerGrab = styled.div`
  position: absolute;
  bottom: 0px;
  left: 68px;
  background: radial-gradient(#fff 2%, #444);
  height: 50px;
  width: 50px;
  border-radius: 25px;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Marker = styled.div`
  background-color: #fff;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: transparent;
`;

interface Props {
  type: "scales" | "modes";
}

interface Coordinates {
  x: number;
  y: number;
}

const Dial: FunctionComponent<Props> = (props: Props) => {
  const { type } = props;

  const [selected, setSelected] = useState(false);
  const [grabbed, setGrabbed] = useState(false);
  const [angle, setAngle] = useState(0);
  const throttledAngle = useThrottle(angle, 200);
  const debouncedAngle = useDebounce(angle, 50);

  const dialRef = useRef<HTMLDivElement>(null);
  const [pivot, setPivot] = useState<Coordinates>({
    x: 0,
    y: 0,
  });
  const [origin, setOrigin] = useState<Coordinates>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (dialRef.current) {
      const { x, y } = dialRef.current.getBoundingClientRect();

      setPivot({
        x: x + 88,
        y: y + 88,
      });
      setOrigin({
        x: x + 88,
        y: y + 176,
      });
    }
  }, []);

  const renderDial = (() => {
    return (
      <Bevel>
        <Center ref={dialRef}>
          <MarkerContainer
            angle={angle}
            onMouseEnter={() => {
              setSelected(true);
            }}
            onMouseLeave={() => {
              // console.log("leave");
              setSelected(false);
              // setGrabbed(false);
            }}
            onMouseMove={(e) => {
              if (!grabbed) {
                return;
              }

              const sideC =
                ((pivot.x - e.pageX) ** 2 + (pivot.y - e.pageY) ** 2) ** 0.5;

              const sideB = 88;
              const sideA =
                ((origin.x - e.pageX) ** 2 + (origin.y - e.pageY) ** 2) ** 0.5;

              const takeCos =
                (sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC);

              const angleA = Math.acos(takeCos);
              if (e.pageX > pivot.x) {
                setAngle(360 - (angleA * 180) / Math.PI);
              } else {
                setAngle((angleA * 180) / Math.PI);
              }
            }}
          >
            <MarkerGrab
              onMouseDown={(e) => {
                setGrabbed(true);
              }}
              onMouseUp={(e) => {
                setGrabbed(false);
              }}
              onMouseLeave={() => {
                setGrabbed(false);
              }}
            >
              <Marker />
            </MarkerGrab>
          </MarkerContainer>
        </Center>
      </Bevel>
    );
  })();

  return (
    <Root>
      <Options type={type} angle={debouncedAngle}>
        {selected ? (
          <OutlineHighlight>{renderDial}</OutlineHighlight>
        ) : (
          <Outline>{renderDial}</Outline>
        )}
      </Options>
    </Root>
  );
};

export default Dial;
