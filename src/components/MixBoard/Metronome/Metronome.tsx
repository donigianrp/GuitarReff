import React, { FunctionComponent } from "react";
import styled from "styled-components";
import BPMDisplay from "./BPMDisplay";

const Root = styled.div`
  margin-top: 40px;
  font-size: 1.5em;
  min-width: 1260px;
  display: flex;
  justify-content: center;
`;
const MixBoardContainer = styled.div`
  width: 1264px;
`;

const PanelWrapper = styled.div`
  display: flex;
  background: #1b1b1b;
  border-radius: 10px 10px 0 0;
  box-shadow: 2px 2px 2px #222;
  padding: 10px 0;
`;
const MidPanelWrapper = styled.div`
  display: flex;
  background: #1b1b1b;
  box-shadow: 2px 2px 2px #222;
  padding: 10px 0;
`;

const Metronome: FunctionComponent = (props) => {
  return (
    <Root>
      <BPMDisplay />
    </Root>
  );
};

export default Metronome;
