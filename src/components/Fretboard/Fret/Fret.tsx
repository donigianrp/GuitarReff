import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FretboardModel } from "../../../store/fretboard";
import { RootState } from "../../../store/state";
import BoardSegment from "./BoardSegment/BoardSegment";
import Strings from "./Strings/Strings";

const Wrapper = styled.div`
  display: flex;
`;

const FretLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

const FretBar = styled.div.attrs((props: { bottom: boolean }) => ({
  bottom: props.bottom,
}))`
  position: absolute;
  top: ${(props) => (props.bottom ? "-2px" : "0px")};
  height: ${(props) => (props.bottom ? "304px" : "300px")};
  width: 3px;
  background: #ccc;
`;

const FretComponentsWrapper = styled.div`
  position: relative;
  border-top: 2px solid #ccc;
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
        {/* <FretLabel>{fretPosition}</FretLabel> */}
        <FretComponentsWrapper>
          <Strings fretboard={boardDisplay} fretPosition={fretPosition} />
          <BoardSegment boardMarkers={markerAmount} />
          <FretBar bottom={false} />
        </FretComponentsWrapper>
      </div>
      {fretPosition === 22 && (
        <FretComponentsWrapper>
          <FretBar bottom={true} />
        </FretComponentsWrapper>
      )}
    </Wrapper>
  );
};

export default Fret;
