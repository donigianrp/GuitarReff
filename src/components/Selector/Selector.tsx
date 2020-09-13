import React, { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BoardDisplayNote, Note } from "../../global";
import { useTypedDispatch } from "../../store";
import { FretboardModel } from "../../store/fretboard";
import { RootState } from "../../store/state";
import { initialNotes } from "../../store/static";
import Dial from "./Dial/Dial";
import Slider from "./Slider/Slider";

const Root = styled.div`
  font-size: 1.5em;
  width: 1200px;
`;
const NoteWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;
const NoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Indicator = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 12px;
  background: radial-gradient(#f99f9f 99%, #ffafaf);
`;
const HighlightedIndicator = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 12px;
  background: radial-gradient(#ce0000 30%, #ffafaf);
  box-shadow: 0 0 10px #ce0000;
`;
const NotesWrapper = styled.div`
  width: 100%;
  height: 100px;

  margin: 20px 0;
  display: flex;
  justify-content: center;
`;
const NoteStyle = styled.div`
  width: 56px;
  height: 56px;
  margin-top: 2px;
  background: linear-gradient(315deg, #222 1%, #ccc);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const NoteStyleBorder = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #444 990%, #ccc);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 10px;
  -webkit-box-shadow: 0px 5px 0px #aaa;
  -moz-box-shadow: 0px 5px 0px #aaa;
  -ms-box-shadow: 0px 5px 0px #aaa;
  -o-box-shadow: 0px 5px 0px #aaa;
  box-shadow: 0.5px 2px 0px #aaa;
  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 0 0;
    margin: 12px 10px 10px 10px;
  }
`;

const NoteGradient = styled.div`
  color: #fff;
`;
const HighlightedNoteStyle = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #444 990%, #ccc);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 12px 10px 10px 10px;
  box-shadow: 0;
`;

const SectionWrapper = styled.div`
  margin: 20px;
`;

const PanelWrapper = styled.div`
  display: flex;
  background: #1b1b1b;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #222;
  padding: 10px 0;
`;
const Wrapper = styled.div`
  display: flex;
`;
const ScaleSelectStyle = styled.select`
  height: 30px;
  width: 150px;
  margin: 5px 10px;
`;
const NoteSelectStyle = styled.select`
  height: 30px;
  width: 100px;
  margin: 5px 10px;
`;
const Button = styled.button`
  cursor: pointer;
  margin: 5px 10px;
`;

const Selector: FunctionComponent = (props) => {
  const dispatch = useTypedDispatch();

  const [selectedNote, setSelectedNote] = useState<Note | "">("");
  const { selectedNotes } = useSelector<RootState, FretboardModel>(
    (state) => state.fretboard
  );

  return (
    <Root>
      <PanelWrapper>
        <Dial type={"scales"} />
        <Dial type={"modes"} />
        <Slider selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
      </PanelWrapper>
      <div>
        <SectionWrapper>
          <NotesWrapper>
            {initialNotes.map((noteDetails: BoardDisplayNote) => {
              return (
                <NoteContainer key={noteDetails.note}>
                  {selectedNotes.includes(noteDetails.note) ? (
                    <>
                      <HighlightedIndicator />
                      <NoteWrapper>
                        <HighlightedNoteStyle>
                          <NoteStyle
                            onClick={() => {
                              dispatch({
                                type: "SELECT_NOTE",
                                payload: noteDetails.note,
                              });
                            }}
                          >
                            <NoteGradient>{noteDetails.note}</NoteGradient>
                          </NoteStyle>
                        </HighlightedNoteStyle>
                      </NoteWrapper>
                    </>
                  ) : (
                    <>
                      <Indicator />
                      <NoteWrapper>
                        <NoteStyleBorder>
                          <NoteStyle
                            onClick={() => {
                              dispatch({
                                type: "SELECT_NOTE",
                                payload: noteDetails.note,
                              });
                            }}
                          >
                            <NoteGradient>{noteDetails.note}</NoteGradient>
                          </NoteStyle>
                        </NoteStyleBorder>
                      </NoteWrapper>
                    </>
                  )}
                </NoteContainer>
              );
            })}
          </NotesWrapper>
        </SectionWrapper>
      </div>
    </Root>
  );
};

export default Selector;
