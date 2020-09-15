import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

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
  left: 58px;
  background: radial-gradient(#fff 2%, #444);
  height: 60px;
  width: 60px;
  border-radius: 30px;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const Marker = styled.div`
  background-color: #fff;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: transparent;
`;

interface Coordinates {
  x: number;
  y: number;
}
interface Props {
  center: Coordinates;
  angle: number;
  setSelected: (val: boolean) => void;
  setAngle: (val: number) => void;
  disabled: boolean;
}

const DialMarker: FunctionComponent<Props> = (props: Props) => {
  const { center, setSelected, angle, setAngle, disabled } = props;
  const [grabbed, setGrabbed] = useState(false);

  const getAngle = (cX: number, cY: number, pts: { x: number; y: number }) => {
    const x = cX - pts.x;
    const y = cY - pts.y;
    let updatedAngle = Math.floor((Math.atan(y / x) * 180) / Math.PI);

    if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
      updatedAngle += 90;
    } else {
      updatedAngle += 270;
    }
    return updatedAngle;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!grabbed || disabled) {
      return;
    }

    const updated = getAngle(e.pageX, e.pageY, center);
    if (angle !== updated) {
      setAngle(updated);
    }
  };

  return (
    <MarkerContainer
      angle={angle}
      onMouseDown={(e) => {
        setGrabbed(true);
      }}
      onMouseUp={(e) => {
        setGrabbed(false);
      }}
      onMouseEnter={() => {
        setSelected(true);
      }}
      onMouseLeave={() => {
        setGrabbed(false);
        setSelected(false);
      }}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <MarkerGrab>
        <Marker />
      </MarkerGrab>
    </MarkerContainer>
  );
};

export default DialMarker;
