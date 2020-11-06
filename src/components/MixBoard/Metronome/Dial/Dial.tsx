import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FretboardModel } from "../../../../store/fretboard";
import { RootState } from "../../../../store/state";

const Root = styled.div`
  display: flex;
`;

const Outline = styled.div.attrs((props: { selected: boolean }) => ({
  selected: props.selected,
}))`
  height: 140px;
  width: 140px;
  border-radius: 70px;
  background-color: ${(props) => (props.selected ? "#3553ff" : "#97a6ff")};
  box-shadow: ${(props) => (props.selected ? "0 0px 10px #4863ff" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bevel = styled.div`
  height: 126px;
  width: 126px;
  border-radius: 63px;
  background: linear-gradient(315deg, #000, #888);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  height: 116px;
  width: 116px;
  border-radius: 58px;
  background: linear-gradient(315deg, #222 1%, #ccc 80%);
  position: relative;
`;

interface Props {
  // type: "scales" | "modes";
}

const Dial: FunctionComponent<Props> = (props: Props) => {
  // const { type } = props;
  const RADIUS = 88;

  const [selected, setSelected] = useState(false);

  const [angle, setAngle] = useState(0);
  const dialRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (dialRef.current && center.x === 0) {
      const { x, y } = dialRef.current.getBoundingClientRect();

      setCenter({
        x: x + RADIUS,
        y: y + RADIUS,
      });
    }
  }, []);

  return (
    <Root>
      {/* <Options type={type} angle={angle} setAngle={setAngle}> */}
      <Outline selected={selected}>
        <Bevel>
          <Center ref={dialRef}>
            {/* <DialMarker
              setSelected={setSelected}
              center={center}
              angle={angle}
              setAngle={setAngle}
              disabled={disabled}
            /> */}
          </Center>
        </Bevel>
      </Outline>
      {/* </Options> */}
    </Root>
  );
};

export default Dial;
