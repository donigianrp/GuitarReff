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

const Root = styled.div`
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
  border-radius: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const SectionWrapper = styled.div`
  margin: 20px;
`;

const ScaleNameStyle = styled.div`
  margin: 10px 20px;
  padding: 5px;
  width: 200px;
  border-radius: 5px;
  cursor: pointer;
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
      <div>
        <SectionWrapper>
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
        </SectionWrapper>
        <SectionWrapper>
          <div>Select Note:</div>
          <div>
            {initialNotes.map((noteDetails: BoardDisplayNote, i: number) => {
              return (
                <NoteWrapper key={i}>
                  {selectedNotes.includes(noteDetails.note) ? (
                    <NoteStyle
                      onClick={() => {
                        dispatch({
                          type: "SELECT_NOTE",
                          payload: noteDetails.note,
                        });
                      }}
                    >
                      {noteDetails.note}
                    </NoteStyle>
                  ) : (
                    <HighlightedNoteStyle
                      onClick={() => {
                        dispatch({
                          type: "SELECT_NOTE",
                          payload: noteDetails.note,
                        });
                      }}
                    >
                      {noteDetails.note}
                    </HighlightedNoteStyle>
                  )}
                </NoteWrapper>
              );
            })}
          </div>
        </SectionWrapper>
      </div>
    </Root>
  );
};

export default Selector;
