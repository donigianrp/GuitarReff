import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Main from "./components/Main/Main";
import Selector from "./components/Selector/Selector";
import { useTypedDispatch } from "./store";
import { FretboardModel } from "./store/fretboard";
import { RootState } from "./store/state";
import { jimmyPageTuning, standardTuning } from "./store/static";

const Root = styled.div`
  font: normal 14px Open Sans;
  padding: 30px;
  position: relative;
`;
const Title = styled.div`
  display: flex;
  font: normal 2em Varela Round;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const App: React.FC = () => {
  const dispatch = useTypedDispatch();

  const { tuning } = useSelector<RootState, FretboardModel>(
    (state) => state.fretboard
  );

  return (
    <Root>
      {/* <Title>GuitarReff</Title> */}
      {/* <button
        onClick={() =>
          dispatch({
            type: "UPDATE_TUNING",
            payload: standardTuning,
          })
        }
      >
        Standard Tuning
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_TUNING",
            payload: jimmyPageTuning,
          })
        }
      >
        Jimmy Page Tuning
      </button>
      <Wrapper>
        {tuning.map((noteDetails, idx) => (
          <div key={idx}>{noteDetails.note}</div>
        ))}
      </Wrapper> */}
      <div>
        <Selector />
        <Main />
      </div>
    </Root>
  );
};

export default App;
