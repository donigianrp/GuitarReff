import React from "react";
import styled from "styled-components";
import Main from "./components/Main/Main";
import MixBoard from "./components/MixBoard/MixBoard";

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
  return (
    <Root>
      <div>
        <Main />
        <MixBoard />
      </div>
    </Root>
  );
};

export default App;
