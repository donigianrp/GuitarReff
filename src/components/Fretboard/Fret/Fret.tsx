import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FretboardModel } from "../../../store/fretboard";
import { RootState } from "../../../store/state";
import BoardSegment from "./BoardSegment/BoardSegment";
import FretBar from "./FretBar/FretBar";
import Strings from "./Strings/Strings";

const Wrapper = styled.div`
  display: flex;
`;
// flex-direction: column;

const FretLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

const FretComponentsWrapper = styled.div`
  position: relative;
  border-top: 2px solid #ccc;
`;

const Bottom = styled.div`
  height: 304px;
  width: 3px;
  background: #ccc;
  margin-top: 37px;
`;

interface Props {
  fretPosition: number;
  markerAmount: number;
}

const Fret: FunctionComponent<Props> = (props: Props) => {
  const { fretPosition, markerAmount } = props;
  const { boardDisplay } = useSelector<RootState, FretboardModel>(
    (state) => state.fretboard
  );

  return (
    <Wrapper>
      <div>
        <FretLabel>{fretPosition}</FretLabel>
        <FretComponentsWrapper>
          <Strings fretboard={boardDisplay} fretPosition={fretPosition} />
          <BoardSegment boardMarkers={markerAmount} />
          <FretBar />
        </FretComponentsWrapper>
      </div>
      {fretPosition === 22 && <Bottom />}
    </Wrapper>
  );
};

export default Fret;
