import React from "react";
import styled from "styled-components";
import Main from "./components/Main/Main";
import MixBoard from "./components/MixBoard/MixBoard";
import NavBar from "./components/NavBar/NavBar";

const Body = styled.div`
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Body>
        <Wrapper>
          <Main />
          <MixBoard />
        </Wrapper>
      </Body>
    </>
  );
};

export default App;
