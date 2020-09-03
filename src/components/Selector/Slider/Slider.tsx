import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import { Note } from "../../../global";
import { useTypedDispatch } from "../../../store";
import { initialNotes } from "../../../store/static";

const SliderContainer = styled.div`
  height: 280px;
  width: 150px;
`;

const NoteSlider = styled.input`
  transform: rotate(270deg);
  width: 250px;
  margin-top: 130px;
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
  const { selectedNote, setSelectedNote } = props;
  const dispatch = useTypedDispatch();
  const [increment, setIncrement] = useState(-1);

  useEffect(() => {
    if (increment >= 0) {
      setSelectedNote(initialNotes[increment].note);
    } else {
      setSelectedNote("");
    }
  }, [increment]);

  return (
    <>
      <SliderContainer>
        <NoteSlider
          type="range"
          min="-1"
          max="11"
          step="1"
          value={increment}
          onChange={(event) => {
            setIncrement(Number(event.target.value));
          }}
        />
      </SliderContainer>
      <NoteWrapper>
        <NoteLabel>G#</NoteLabel>
        <CurrentNote>{selectedNote ? selectedNote : "Off"}</CurrentNote>
        <NoteLabel>A</NoteLabel>
      </NoteWrapper>
    </>
  );
};

export default Slider;
