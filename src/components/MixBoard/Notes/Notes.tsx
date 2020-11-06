import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BoardDisplayNote } from "../../../global";
import { useActions } from "../../../hooks/useActions";
import { FretboardModel } from "../../../store/fretboard";
import { RootState } from "../../../store/state";
import { initialNotes } from "../../../store/static";
import StaticButton from "../Components/StaticButton";

const NotesWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

interface Props {}

const Notes: FunctionComponent<Props> = (props: Props) => {
  const { selectedNotes } = useSelector<RootState, FretboardModel>(
    (state) => state.fretboard
  );
  const { setSelectedNote } = useActions();
  return (
    <NotesWrapper>
      {initialNotes.map((noteDetails: BoardDisplayNote) => {
        return (
          <StaticButton
            key={noteDetails.note}
            handleClick={() => setSelectedNote(noteDetails.note)}
            selected={selectedNotes.includes(noteDetails.note)}
            buttonText={noteDetails.note}
          />
        );
      })}
    </NotesWrapper>
  );
};

export default Notes;
