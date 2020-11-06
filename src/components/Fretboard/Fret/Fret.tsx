import React, { FunctionComponent, useState } from "react";
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
  height: 30px;
  width: 55px;
`;

const FretBar = styled.div.attrs(
  (props: { bottom?: boolean; top?: boolean }) => ({
    bottom: props.bottom || false,
    top: props.top || false,
  })
)`
  position: absolute;
  top: ${(props) => (props.bottom ? "-2px" : "0px")};
  height: ${(props) => (props.bottom ? "304px" : "300px")};
  background: ${(props) => (props.top ? "#ffd700" : "#ccc")};
  width: 3px;
`;

const FretComponentsWrapper = styled.div`
  position: relative;
  border-top: 2px solid #ccc;
`;
const FretNumbers = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
`;

interface Props {
  fretPosition: number;
  markerAmount: number;
}

const Fret: FunctionComponent<Props> = (props: Props) => {
  const { fretPosition, markerAmount } = props;
  const [hovered, setHovered] = useState<number | null>(null);
  const { boardDisplay } = useSelector<RootState, FretboardModel>(
    (state) => state.fretboard
  );

  return (
    <div>
      <FretNumbers>
        <FretLabel>{hovered === fretPosition && fretPosition}</FretLabel>
      </FretNumbers>
      <Wrapper>
        <div>
          <FretComponentsWrapper
            onMouseEnter={() => setHovered(fretPosition)}
            onMouseLeave={() => setHovered(null)}
          >
            <Strings fretboard={boardDisplay} fretPosition={fretPosition} />
            <BoardSegment boardMarkers={markerAmount} />
            <FretBar top={fretPosition === 1} />
          </FretComponentsWrapper>
        </div>
        {fretPosition === 22 && (
          <FretComponentsWrapper>
            <FretBar bottom={true} />
          </FretComponentsWrapper>
        )}
      </Wrapper>
    </div>
  );
};

export default Fret;
