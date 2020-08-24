import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Fretboard from "../Fretboard/Fretboard";

const Root = styled.div`
  min-width: 1200px
  display: flex;
  justify-content: center;
`;

const Main: FunctionComponent = (props) => {
  return (
    <Root>
      <Fretboard />
    </Root>
  );
};

export default Main;
