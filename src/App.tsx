import React from "react";
import styled from "styled-components";
import Main from "./components/Main/Main";
import Selector from "./components/Selector/Selector";
import { useSelector } from "react-redux";
import { RootState } from "./store/state";
import { FretboardModel } from "./store/fretboard";
import { useTypedDispatch } from "./store";
import { Note } from "./global";

const Root = styled.div`
  background-color: #fff;
  font: normal 14px sans-serif;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3em;
  margin: 20px 0;
`;

const Wrapper = styled.div`
  display: flex;
`;

const App: React.FC = () => {
  const { tuning, selectedNotes, boardDisplay } = useSelector<
    RootState,
    FretboardModel
  >(state => state.fretboard);

  const dispatch = useTypedDispatch();
  return (
    <Root>
      <Title>Guitar Reff</Title>
      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_TUNING",
            payload: ["E", "A", "D", "G", "B", "E"]
          })
        }
      >
        Standard Tuning
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_TUNING",
            payload: ["D", "A", "D", "G", "A", "D"]
          })
        }
      >
        Jimmy Page Tuning
      </button>
      <Wrapper>
        {tuning.map((note, idx) => (
          <div key={idx}>{note}</div>
        ))}
      </Wrapper>
      <Wrapper>
        <Selector />
        <Main />
      </Wrapper>
    </Root>
  );
};

export default App;
