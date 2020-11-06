import React, { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { DialOption, ModeName, ScaleName } from "../../../../../global";
import { useActions } from "../../../../../hooks/useActions";
import { useDebounce } from "../../../../../hooks/useDebounce";
import { FretboardModel } from "../../../../../store/fretboard";
import { RootState } from "../../../../../store/state";

const Option = styled.p.attrs(
  (props: {
    bottom: number;
    left: number;
    selected: boolean;
    disabled: boolean;
  }) => ({
    bottom: props.bottom || 0,
    left: props.left || 0,
    selected: props.selected || false,
    disabled: props.disabled || false,
  })
)`
  position: absolute;
  bottom: ${(props) => props.bottom}px;
  left: ${(props) => props.left}px;
  color: ${(props) =>
    props.disabled ? "#666" : props.selected ? "#3553ff" : "#fff"};
  font-weight: ${(props) =>
    props.selected && !props.disabled ? "600" : "400"};
  font-size: 0.8rem;
  width: 70px;
`;

// props.disabled ? "#333" : props.selected ? "#3553ff" : "#fff"};
const modes: DialOption<ModeName>[] = [
  {
    label: "Ionian",
    bottom: 30,
    left: 90,
  },
  {
    label: "Dorian",
    bottom: 115,
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
    bottom: 115,
    left: 310,
  },
  {
    label: "Locrian",
    bottom: 30,
    left: 270,
  },
];

interface OptProps {
  angle: number;
  min: (idx: number) => number;
  max: (idx: number) => number;
  disabled?: boolean;
}

const ModeOptions: FunctionComponent<OptProps> = React.memo(
  (props: OptProps) => {
    const { angle, min, max, disabled } = props;

    const { selectedModeName } = useSelector<RootState, FretboardModel>(
      (state) => state.fretboard
    );
    const { setSelectedModeName, setSelectedMode } = useActions();
    const debouncedMode = useDebounce(selectedModeName, 200);

    const angleHash = modes.reduce(
      (
        acc: { [val: string]: [number, number] },
        el: DialOption<ModeName>,
        idx: number
      ) => {
        acc[el.label] = [min(idx + 1), max(idx + 1)];
        return acc;
      },
      {}
    );

    const bottomSelectionMin = min(0);
    const bottomSelectionMax = max(0);

    useEffect(() => {
      setSelectedMode(debouncedMode as ModeName);
    }, [debouncedMode]);

    return (
      <>
        {modes.map((opt: DialOption<ModeName>, idx: number) => {
          if (
            angle >= angleHash[opt.label][0] &&
            angle < angleHash[opt.label][1] &&
            opt.label !== selectedModeName
          ) {
            setSelectedModeName(opt.label);
          } else if (
            (angle >= bottomSelectionMin || angle <= bottomSelectionMax) &&
            selectedModeName !== "all"
          ) {
            setSelectedModeName("all");
          }
          return (
            <div key={opt.label}>
              <Option
                bottom={opt.bottom}
                left={opt.left}
                selected={opt.label === selectedModeName}
                disabled={disabled}
              >
                {opt.label}
              </Option>
              <Option
                bottom={0}
                left={190}
                selected={selectedModeName === "all"}
                disabled={disabled}
              >
                All
              </Option>
            </div>
          );
        })}
      </>
    );
  }
);

export default ModeOptions;
