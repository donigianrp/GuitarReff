import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { StateProps } from "../../../global";
import { useTypedDispatch } from "../../../store";
import { FretboardModel } from "../../../store/fretboard";
import { RootState } from "../../../store/state";
import BoardSegment from "./BoardSegment/BoardSegment";
import FretBar from "./FretBar/FretBar";
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
  const { noteDisplay } = useSelector<StateProps>(state => state) as StateProps;

  const { selectedNotes, boardDisplay } = useSelector<
    RootState,
    FretboardModel
  >(state => state.fretboard);

  const dispatch = useTypedDispatch();

  return (
    <Wrapper>
      <FretLabel>{fretPosition}</FretLabel>
      <FretComponentsWrapper>
        <Strings fretboard={boardDisplay} fretPosition={fretPosition} />
        {/* <GlobalStateConsumer>
          {state =>
            state && (
              <Strings
                fretboard={state.noteDisplay(selectedNotes[0])}
                fretPosition={fretPosition}
              />
            )
          }
        </GlobalStateConsumer> */}
        <BoardSegment boardMarkers={markerAmount} />
        <FretBar />
      </FretComponentsWrapper>
    </Wrapper>
  );
};

export default Fret;
