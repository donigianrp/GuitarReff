import React, { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { DialOption, ModeName, ScaleName } from "../../../../global";
import { useActions } from "../../../../hooks/useActions";
import { useDebounce } from "../../../../hooks/useDebounce";
import { FretboardModel } from "../../../../store/fretboard";
import { RootState } from "../../../../store/state";
import { modes, scales } from "../../../../store/static";
import ModeOptions from "./ModeOptions";
import ScaleOptions from "./ScaleOptions";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 400px;
  height: 240px;
  position: relative;
  padding-bottom: 40px;
`;

const Option = styled.p.attrs(
  (props: { bottom: number; left: number; selected: boolean }) => ({
    bottom: props.bottom || 0,
    left: props.left || 0,
    selected: props.selected || false,
  })
)`
  position: absolute;
  bottom: ${(props) => props.bottom}px;
  left: ${(props) => props.left}px;
  color: ${(props) => (props.selected ? "#3553ff" : "#fff")};
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 0.8rem;
  width: 70px;
`;

interface Props {
  children?: any;
  type: "scales" | "modes";
  angle: number;
  setAngle: (val: number) => void;
  scale?: ScaleName | "";
  mode?: ModeName | "";
}
const Options: FunctionComponent<Props> = (props: Props) => {
  const { children, type, angle, setAngle } = props;
  const { selectedScaleName } = useSelector<RootState, FretboardModel>(
    (state) => state.fretboard
  );

  useEffect(() => {
    if (type === "modes" && selectedScaleName === "none") {
      setAngle(0);
    }
  }, [selectedScaleName]);

  const increment =
    type === "scales"
      ? 360 / (Object.keys(scales).length + 1)
      : 360 / (Object.keys(modes).length + 1);
  const half = increment / 2;
  const min = (idx: number) => {
    return idx === 0 ? 360 - half : idx * increment - half;
  };
  const max = (idx: number) => idx * increment + half;

  return (
    <Root>
      {type === "scales" ? (
        <ScaleOptions angle={angle} min={min} max={max} />
      ) : (
        <ModeOptions
          angle={angle}
          min={min}
          max={max}
          disabled={selectedScaleName === "none"}
        />
      )}
      {children}
    </Root>
  );
};

export default Options;
