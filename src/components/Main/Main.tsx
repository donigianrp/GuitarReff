import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Fretboard from "../Fretboard/Fretboard";

const Root = styled.div`
  flex: 1;
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
