import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BoardDisplayNote } from "../../../global";
import { useActions } from "../../../hooks/useActions";
import { FretboardModel } from "../../../store/fretboard";
import { RootState } from "../../../store/state";
import { initialNotes } from "../../../store/static";

const NotesWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const NoteGradient = styled.div`
  color: #fff;
`;
const NoteStyle = styled.div.attrs((props: { selected: boolean }) => ({
  selected: props.selected,
}))`
  height: 62px;
  background: linear-gradient(315deg, #222 1%, #888);
  border-radius: 2px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: ${(props) => (props.selected ? "none" : "0 3px 0px #777")};
  margin-top: ${(props) => (props.selected ? "0px" : "-2px")};
`;

const Outline = styled.div.attrs((props: { selected: boolean }) => ({
  selected: props.selected,
}))`
  margin: 0 5px;
  width: 60px;
  height: 62px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 3px solid ${(props) => (props.selected ? "#3553ff" : "#97a6ff")};
  box-shadow: ${(props) => (props.selected ? "0 0px 10px #4863ff" : "none")};
  -webkit-box-shadow: ${(props) =>
    props.selected ? "0 0px 10px #4863ff" : "none"};
  -moz-box-shadow: ${(props) =>
    props.selected ? "0 0px 10px #4863ff" : "none"};
  -ms-box-shadow: ${(props) =>
    props.selected ? "0 0px 10px #4863ff" : "none"};
  -o-box-shadow: ${(props) => (props.selected ? "0 0px 10px #4863ff" : "none")};
  transition: all 0.1s ease-in-out;
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
        const highlight = selectedNotes.includes(noteDetails.note);
        return (
          <Outline key={noteDetails.note} selected={highlight}>
            <NoteStyle
              selected={highlight}
              onClick={() => {
                setSelectedNote(noteDetails.note);
              }}
            >
              <NoteGradient>{noteDetails.note}</NoteGradient>
            </NoteStyle>
          </Outline>
        );
      })}
    </NotesWrapper>
  );
};

export default Notes;
