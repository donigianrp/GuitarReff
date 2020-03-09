import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { GlobalState, notes } from "../../context/GlobalState";
import { Note, StateProps } from "../../global";
import { useDispatch, useSelector } from "react-redux";
import { InitialState, RootDispatcher } from "../../storeOld/root-reducer";

const Root = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  font-size: 1.5em;
`;
const NoteWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;
const NoteStyle = styled.div`
  width: 60px;
  background-color: #aaa;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const HighlightedNoteStyle = styled.div`
  width: 60px;
  background-color: #ddd;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Selector: FunctionComponent = props => {
  // const { fretboard, selectedNote } = useContext(GlobalState);
  // const dispatch = useDispatch();
  // const rootDispatcher = new RootDispatcher(dispatch);

  // const selectedNotes = useSelector<StateProps>(
  //   state => state.selectedNotes
  // ) as Note[];

  // const dispatchNote = (note: Note | null) => {
  //   dispatch(rootDispatcher.updateSelectedNotes([note]));
  // };
  // const dispatchDisplay = (note: Note | null) => {
  //   dispatch(rootDispatcher.updateNoteDisplay(note));
  // };
  return (
    <Root>
      {/* <div>
        <div>Select Note:</div>
        <div>
          {notes.map((note: Note | null, i: number) => {
            return (
              <NoteWrapper key={i}>
                {selectedNotes.includes(note) ? (
                  <HighlightedNoteStyle>{note}</HighlightedNoteStyle>
                ) : (
                  <NoteStyle
                    onClick={() => {
                      dispatchDisplay(note);
                      dispatchNote(note);
                    }}
                  >
                    {note}
                  </NoteStyle>
                )}
              </NoteWrapper>
            );
          })}
        </div>
        </div>  */}
    </Root>
  );
};

export default Selector;
