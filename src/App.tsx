import React from "react";
import styled from "styled-components";
import Main from "./components/Main/Main";

const Root = styled.div`
  background-color: #fff;
  font: normal 14px Candara, sans-serif;
`;
const Title = styled.div`
  font-size: 2em;
`;

const App: React.FC = () => {
  return (
    <Root>
      <Title>Welcome to Guitar Reff!</Title>
      <Main />
    </Root>
  );
};

export default App;
