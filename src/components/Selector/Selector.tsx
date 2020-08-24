import React, { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  BoardDisplayNote,
  Note,
  Scale,
  ScaleName,
  ModeName,
} from "../../global";
import { useTypedDispatch } from "../../store";
import { FretboardModel } from "../../store/fretboard";
import { RootState } from "../../store/state";
import { initialNotes, scales, modeMap } from "../../store/static";
import Dial from "./Dial/Dial";

const Root = styled.div`
  // display: flex;
  // justify-content: center;
  font-size: 1.5em;
  // padding: 100px;
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
  // background: linear-gradient(to bottom, #eee 50%, #333);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
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
  const [selectedScaleNote, setSelectedScaleNote] = useState<Note | "">("");
  const [selectedScale, setSelectedScale] = useState<ScaleName | "">("");
  const [selectedModeNote, setSelectedModeNote] = useState<Note | "">("");
  const [selectedMode, setSelectedMode] = useState<ModeName | "">("");
  const { selectedNotes } = useSelector<RootState, FretboardModel>(
    (state) => state.fretboard
  );

  return (
    <Root>
      <Wrapper>
        <Dial type={"scales"} />
        <Dial type={"modes"} />
      </Wrapper>
      <div>
        <Wrapper>
          <SectionWrapper>
            <div>Mode Note</div>
            <NoteSelectStyle
              onChange={(e) => {
                if (e.target.value) {
                  setSelectedModeNote(e.target.value as Note);
                }
              }}
            >
              <option value={""} label={"Select root:"}></option>

              {initialNotes.map((noteDetails) => {
                return (
                  <option key={noteDetails.note} value={noteDetails.note}>
                    {noteDetails.note}
                  </option>
                );
              })}
            </NoteSelectStyle>
          </SectionWrapper>
          <SectionWrapper>
            <div>Scale Note</div>
            <NoteSelectStyle
              onChange={(e) => {
                if (e.target.value) {
                  setSelectedScaleNote(e.target.value as Note);
                }
              }}
            >
              <option value={""} label={"Select root:"}></option>

              {initialNotes.map((noteDetails) => {
                return (
                  <option key={noteDetails.note} value={noteDetails.note}>
                    {noteDetails.note}
                  </option>
                );
              })}
            </NoteSelectStyle>
          </SectionWrapper>
        </Wrapper>
        {/* <SectionWrapper>
          <div>Select Mode:</div>
          <Wrapper>
            <ScaleSelectStyle
              onChange={(e) => {
                if (e.target.value) {
                  setSelectedMode(e.target.value as ModeName);
                }
              }}
            >
              <option value="" label={"Select mode:"} />
              {Object.keys(modeMap).map((modeName) => {
                return (
                  <option key={modeName} value={modeName}>
                    {modeName}
                  </option>
                );
              })}
            </ScaleSelectStyle>
            <NoteSelectStyle
              onChange={(e) => {
                if (e.target.value) {
                  setSelectedModeNote(e.target.value as Note);
                }
              }}
            >
              <option value={""} label={"Select root:"}></option>

              {initialNotes.map((noteDetails) => {
                return (
                  <option key={noteDetails.note} value={noteDetails.note}>
                    {noteDetails.note}
                  </option>
                );
              })}
            </NoteSelectStyle>
            <Button
              disabled={!selectedMode || !selectedModeNote}
              onClick={() => {
                if (selectedMode && selectedModeNote) {
                  const mode = {
                    name: selectedMode,
                    note: selectedModeNote,
                  };
                  dispatch({
                    type: "SELECT_MODE",
                    payload: mode,
                  });
                }
              }}
            >
              Filter
            </Button>
          </Wrapper>
        </SectionWrapper>
        <SectionWrapper>
          <div>Select Scale:</div>
          <Wrapper>
            <ScaleSelectStyle
              onChange={(e) => {
                if (e.target.value) {
                  setSelectedScale(e.target.value as ScaleName);
                }
              }}
            >
              <option value="" label={"Select scale:"} />
              {Object.keys(scales).map((scaleName) => {
                return (
                  <option key={scaleName} value={scaleName}>
                    {scaleName}
                  </option>
                );
              })}
            </ScaleSelectStyle>
            <NoteSelectStyle
              onChange={(e) => {
                if (e.target.value) {
                  setSelectedScaleNote(e.target.value as Note);
                }
              }}
            >
              <option value={""} label={"Select root:"}></option>

              {initialNotes.map((noteDetails) => {
                return (
                  <option key={noteDetails.note} value={noteDetails.note}>
                    {noteDetails.note}
                  </option>
                );
              })}
            </NoteSelectStyle>
            <Button
              disabled={!selectedScale || !selectedScaleNote}
              onClick={() => {
                if (selectedScale && selectedScaleNote) {
                  const scale = {
                    name: selectedScale,
                    note: selectedScaleNote,
                  };
                  dispatch({
                    type: "SELECT_SCALE",
                    payload: scale,
                  });
                }
              }}
            >
              Filter
            </Button>
          </Wrapper>
        </SectionWrapper> */}
        <SectionWrapper>
          {/* <div>Select Note:</div> */}
          {/* <NotesWrapper>
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
          </NotesWrapper> */}
        </SectionWrapper>
      </div>
    </Root>
  );
};

export default Selector;
