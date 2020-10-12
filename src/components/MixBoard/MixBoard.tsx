import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Dial from "./Dial/Dial";
import Metronome from "./Metronome/MetronomeContainer";
import Notes from "./Notes/Notes";
import Slider from "./Slider/Slider";

const Root = styled.div`
  margin-top: 40px;
  font-size: 1.5em;
  width: 1260px;
  display: flex;
  background: #1b1b1b;
`;
const MixBoardContainer = styled.div`
  width: 1000px;
`;
const PanelWrapper = styled.div`
  display: flex;
  border-radius: 10px 0 0 0;
  padding: 10px 0;
`;
const MidPanelWrapper = styled.div`
  display: flex;
  padding: 10px 0;
`;
const MixBoard: FunctionComponent = (props) => {
  return (
    <>
      <Root>
        <MixBoardContainer>
          <PanelWrapper>
            <Dial type={"scales"} />
            <Dial type={"modes"} />
            <Slider />
          </PanelWrapper>
          <MidPanelWrapper>
            <Notes />
          </MidPanelWrapper>
        </MixBoardContainer>
        <Metronome />
      </Root>
    </>
  );
};

export default MixBoard;
