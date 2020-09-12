import React, { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { DialOption, ScaleName } from "../../../../global";
import { useActions } from "../../../../hooks/useActions";
import { useDebounce } from "../../../../hooks/useDebounce";
import { FretboardModel } from "../../../../store/fretboard";
import { RootState } from "../../../../store/state";

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

const scales: DialOption<ScaleName>[] = [
  {
    label: "Natural Minor",
    bottom: 25,
    left: 70,
  },
  {
    label: "Natural Major",
    bottom: 130,
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
    bottom: 130,
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
  disabled?: boolean;
}

const ScaleOptions: FunctionComponent<OptProps> = React.memo(
  (props: OptProps) => {
    const { angle, min, max } = props;

    const angleHash = scales.reduce(
      (
        acc: { [val: string]: [number, number] },
        el: DialOption<ScaleName>,
        idx: number
      ) => {
        acc[el.label] = [min(idx + 1), max(idx + 1)];
        return acc;
      },
      {}
    );

    const bottomSelectionMin = min(0);
    const bottomSelectionMax = max(0);

    const { selectedScaleName } = useSelector<RootState, FretboardModel>(
      (state) => state.fretboard
    );

    const { setSelectedScaleName, setSelectedScale } = useActions();
    const debouncedScale = useDebounce(selectedScaleName, 200);

    useEffect(() => {
      setSelectedScale(debouncedScale as ScaleName);
    }, [debouncedScale]);

    return (
      <>
        {scales.map((opt: DialOption<ScaleName>, idx: number) => {
          if (
            angle >= angleHash[opt.label][0] &&
            angle < angleHash[opt.label][1] &&
            opt.label !== selectedScaleName
          ) {
            setSelectedScaleName(opt.label);
          } else if (
            (angle >= bottomSelectionMin || angle <= bottomSelectionMax) &&
            selectedScaleName !== "none"
          ) {
            setSelectedScaleName("none");
          }

          return (
            <div key={opt.label}>
              <Option
                bottom={opt.bottom}
                left={opt.left}
                selected={opt.label === selectedScaleName}
              >
                {opt.label}
              </Option>
              <Option
                bottom={0}
                left={183}
                selected={selectedScaleName === "none"}
              >
                None
              </Option>
            </div>
          );
        })}
      </>
    );
  }
);

export default ScaleOptions;
