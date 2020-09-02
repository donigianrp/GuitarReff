import React, { FunctionComponent, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  DialOption,
  ScaleName,
  ModeName,
  Note,
  Mode,
} from "../../../../global";
import { useTypedDispatch } from "../../../../store";
import { RootState } from "../../../../store/state";
import { FretboardModel } from "../../../../store/fretboard";

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

const modes: DialOption<ModeName>[] = [
  {
    label: "Ionian",
    bottom: 30,
    left: 90,
  },
  {
    label: "Dorian",
    bottom: 120,
    left: 50,
  },
  {
    label: "Phrygian",
    bottom: 205,
    left: 75,
  },
  {
    label: "Lydian",
    bottom: 235,
    left: 182,
  },
  {
    label: "Mixolydian",
    bottom: 205,
    left: 275,
  },
  {
    label: "Aeolian",
    bottom: 120,
    left: 310,
  },
  {
    label: "Locrian",
    bottom: 30,
    left: 270,
  },
];

const scales: DialOption<ScaleName>[] = [
  {
    label: "Natural Minor",
    bottom: 25,
    left: 70,
  },
  {
    label: "Natural Major",
    bottom: 140,
    left: 50,
  },
  {
    label: "Major Blues",
    bottom: 220,
    left: 120,
  },
  {
    label: "Minor Blues",
    bottom: 220,
    left: 250,
  },
  {
    label: "Major Pentatonic",
    bottom: 140,
    left: 308,
  },
  {
    label: "Minor Pentatonic",
    bottom: 25,
    left: 280,
  },
];

interface OptProps {
  angle: number;
  min: (idx: number) => number;
  max: (idx: number) => number;
  selectedScale: ScaleName | "";
  setSelectedScale: (val: ScaleName | "") => void;
  selectedMode: ModeName | "";
  setSelectedMode: (val: ModeName | "") => void;
  disabled?: boolean;
}

const Scales: FunctionComponent<OptProps> = React.memo((props: OptProps) => {
  const {
    angle,
    min,
    max,
    selectedScale,
    setSelectedScale,
    selectedMode,
    setSelectedMode,
  } = props;
  const dispatch = useTypedDispatch();
  useEffect(() => {
    if (selectedScale) {
      const scale = {
        name: selectedScale,
        note: "A" as Note,
      };
      dispatch({
        type: "SELECT_SCALE",
        payload: scale,
      });
    }
  }, [selectedScale]);

  useEffect(() => {
    if (angle >= min(0) || angle <= max(0)) {
      setSelectedScale("");
      dispatch({
        type: "SELECT_SCALE",
        payload: null,
      });
    }
  }, [angle]);
  return (
    <>
      {scales.map((opt: DialOption<ScaleName>, idx: number) => {
        if (
          angle >= min(idx + 1) &&
          angle <= max(idx + 1) &&
          opt.label !== selectedScale
        ) {
          setSelectedScale(opt.label);
        }

        return (
          <>
            <Option
              bottom={opt.bottom}
              left={opt.left}
              selected={angle >= min(idx + 1) && angle <= max(idx + 1)}
            >
              {opt.label}
            </Option>
            <Option
              bottom={0}
              left={183}
              selected={angle >= min(0) || angle <= max(0)}
            >
              None
            </Option>
          </>
        );
      })}
    </>
  );
});
const Modes: FunctionComponent<OptProps> = React.memo((props: OptProps) => {
  const { angle, min, max, selectedMode, setSelectedMode, disabled } = props;
  const dispatch = useTypedDispatch();
  const { selectedScale } = useSelector<RootState, FretboardModel>(
    (state) => state.fretboard
  );
  // const [selectedMode, setSelectedMode] = useState<ModeName | "">("");
  useEffect(() => {
    if (selectedMode && selectedScale) {
      const mode: Mode = {
        name: selectedMode,
        note: "A" as Note,
        scale: selectedScale.name,
      };
      dispatch({
        type: "SELECT_MODE",
        payload: mode,
      });
    }
  }, [selectedMode, selectedScale]);

  useEffect(() => {
    if (angle >= min(0) || angle <= max(0)) {
      setSelectedMode("");
      dispatch({
        type: "SELECT_SCALE",
        payload: selectedScale,
      });
    }
  }, [angle]);

  // console.log(selectedMode, selectedScale);
  return (
    <>
      {modes.map((opt: DialOption<ModeName>, idx: number) => {
        if (
          angle >= min(idx + 1) &&
          angle <= max(idx + 1) &&
          opt.label !== selectedMode
        ) {
          setSelectedMode(opt.label);
        }
        return (
          <>
            <Option
              bottom={opt.bottom}
              left={opt.left}
              selected={angle >= min(idx + 1) && angle <= max(idx + 1)}
            >
              {opt.label}
            </Option>
            <Option
              bottom={0}
              left={190}
              selected={angle >= min(0) || angle <= max(0)}
            >
              All
            </Option>
          </>
        );
      })}
    </>
  );
});

interface Props {
  children?: any;
  type: "scales" | "modes";
  angle: number;
  scale?: ScaleName | "";
  mode?: ModeName | "";
}
const Options: FunctionComponent<Props> = (props: Props) => {
  const { children, type, angle } = props;
  const [selectedMode, setSelectedMode] = useState<ModeName | "">("");
  const [selectedScale, setSelectedScale] = useState<ScaleName | "">("");

  const increment =
    type === "scales" ? 360 / (scales.length + 1) : 360 / (modes.length + 1);
  const half = increment / 2;
  const min = (idx: number) => {
    return idx === 0 ? 360 - half : idx * increment - half;
  };
  const max = (idx: number) => idx * increment + half;
  console.log("scale", selectedScale);

  return (
    <Root>
      {type === "scales" ? (
        <Scales
          angle={angle}
          min={min}
          max={max}
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
          selectedScale={selectedScale}
          setSelectedScale={setSelectedScale}
        />
      ) : (
        <Modes
          angle={angle}
          min={min}
          max={max}
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
          selectedScale={selectedScale}
          setSelectedScale={setSelectedScale}
          disabled={!!selectedScale}
        />
      )}
      {children}
    </Root>
  );
};

export default Options;
