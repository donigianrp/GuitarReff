import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import { Note } from "../../../global";
import { useTypedDispatch } from "../../../store";
import { initialNotes } from "../../../store/static";
import { useActions } from "../../../hooks/useActions";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/state";
import { FretboardModel } from "../../../store/fretboard";
import { useDebounce } from "../../../hooks/useDebounce";

const SliderContainer = styled.div`
  height: 280px;
  width: 150px;
`;

const NoteSlider = styled.div`
  transform: rotate(270deg);
  width: 250px;
  margin-top: 130px;

  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: #fff;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 40px;
      height: 25px;
      background: linear-gradient(to right, #333 5%, #fff 20%, #444 80%, #ccc);
      cursor: pointer;
      border-radius: 5px;
    }
    &::-moz-range-thumb {
      width: 25px;
      height: 25px;
      background: linear-gradient(to top, #333 5%, #ccc 20%, #000 %50, #eee 5%);
      cursor: pointer;
    }
  }
`;

const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 235px;
  margin-top: 8px;
`;

const NoteLabel = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CurrentNote = styled.div`
  flex: 1;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
`;

interface Props {
  selectedNote: Note | "";
  setSelectedNote: (val: Note | "") => void;
}

const Slider: FunctionComponent<Props> = (props: Props) => {
  const [increment, setIncrement] = useState(-1);

  const { selectedRoot } = useSelector<RootState, FretboardModel>(
    (state) => state.fretboard
  );

  const { setSelectedRoot, handleRootChange } = useActions();
  const debouncedRoot = useDebounce(selectedRoot, 200);

  useEffect(() => {
    if (increment >= 0) {
      setSelectedRoot(initialNotes[increment].note);
    } else {
      setSelectedRoot("none");
    }
  }, [increment]);

  useEffect(() => {
    handleRootChange(debouncedRoot as Note | "none");
  }, [debouncedRoot]);

  return (
    <>
      <SliderContainer>
        <NoteSlider>
          <input
            className="slider"
            type="range"
            min="-1"
            max="11"
            step="1"
            value={increment}
            onChange={(event) => {
              setIncrement(Number(event.target.value));
            }}
          />
        </NoteSlider>
      </SliderContainer>
      <NoteWrapper>
        <NoteLabel>G#</NoteLabel>
        <CurrentNote>
          {selectedRoot !== "none" ? selectedRoot : "Off"}
        </CurrentNote>
        <NoteLabel>A</NoteLabel>
      </NoteWrapper>
    </>
  );
};

export default Slider;
