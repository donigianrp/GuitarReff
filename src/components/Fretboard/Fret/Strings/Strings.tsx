import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { BoardDisplayNote } from "../../../../global";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/state";
import { FretboardModel } from "../../../../store/fretboard";

const Root = styled.div`
  width: 100%;
  height: 300px;
  border-bottom: 2px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
// align-items: center;

const String = styled.div`
  height: 2px;
  width: 55px;
  background-color: #ccc;
  position: relative;
`;

const NoteLabel = styled.div`
  background-color: #ccc;
  width: 25px;
  height: 25px;
  color: #333;
  border-radius: 25px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 15px;
  top: -12.5px;
  font-weight: 600;
`;
interface Props {
  fretboard: BoardDisplayNote[][];
  fretPosition: number;
}

const Strings: FunctionComponent<Props> = (props: Props) => {
  const { fretPosition } = props;

  const { boardDisplay } = useSelector<RootState, FretboardModel>(
    (state) => state.fretboard
  );

  let notes = [];
  for (let i = 5; i >= 0; i--) {
    notes.push(boardDisplay[i][fretPosition]);
  }

  return (
    <Root>
      {notes.map((noteDetails: BoardDisplayNote, i: number) => {
        return (
          <String key={i}>
            {noteDetails.isSelected && (
              <NoteLabel>{noteDetails.note}</NoteLabel>
            )}
          </String>
        );
      })}
    </Root>
  );
};

export default Strings;
