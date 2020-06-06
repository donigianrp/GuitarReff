import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { BoardDisplayNote } from "../../../../global";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/state";
import { FretboardModel } from "../../../../store/fretboard";

const Root = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 32px;
`;

const String = styled.div`
  height: 32px;
  width: 2px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoteLabel = styled.div`
  background-color: #c70039;
  min-height: 25px;
  min-width: 25px;
  color: #fff;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface Props {
  fretboard: BoardDisplayNote[][];
  fretPosition: number;
}

const Strings: FunctionComponent<Props> = (props: Props) => {
  const { fretboard, fretPosition } = props;

  const { boardDisplay } = useSelector<RootState, FretboardModel>(
    (state) => state.fretboard
  );

  const notes = boardDisplay.map((string) => {
    return string[fretPosition];
  });

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
