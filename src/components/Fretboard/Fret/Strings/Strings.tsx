import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Note } from "../../../../global";

const Root = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 40px;
`;

const String = styled.div`
  height: 40px;
  width: 1px;
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
  fretboard: Note[][] | null;
  fretPosition: number;
}

const Strings: FunctionComponent<Props> = (props: Props) => {
  const { fretboard, fretPosition } = props;
  const notes = fretboard?.map(string => {
    return string[fretPosition];
  });

  return (
    <Root>
      {notes?.map((note: Note | null, i: number) => {
        return <String key={i}>{note && <NoteLabel>{note}</NoteLabel>}</String>;
      })}
    </Root>
  );
};

export default Strings;
