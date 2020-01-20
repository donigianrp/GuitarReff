import React, { FunctionComponent } from "react";
import styled from "styled-components";
import FretBar from "./FretBar/FretBar";
import BoardSegment from "./BoardSegment/BoardSegment";
import Strings from "./Strings/Strings";

const Wrapper = styled.div`
  display: flex;
`;

const FretLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  margin-right: 30px;
`;

const FretComponentsWrapper = styled.div`
  position: relative;
`;

interface Props {
  fretPosition: number;
  markerAmount: number;
}

const Fret: FunctionComponent<Props> = (props: Props) => {
  const { fretPosition, markerAmount } = props;
  return (
    <Wrapper>
      <FretLabel>{fretPosition}</FretLabel>
      <FretComponentsWrapper>
        <Strings />
        <BoardSegment boardMarkers={markerAmount} />
        <FretBar />
      </FretComponentsWrapper>
    </Wrapper>
  );
};

export default Fret;
