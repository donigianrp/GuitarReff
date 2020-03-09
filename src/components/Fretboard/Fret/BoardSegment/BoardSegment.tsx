import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Root = styled.div`
  background: linear-gradient(
    90deg,
    rgba(102, 102, 102, 1) 0%,
    rgba(51, 51, 51, 1) 13%,
    rgba(51, 51, 51, 1) 87%,
    rgba(102, 102, 102, 1) 100%
  );
  width: 300px;
  height: 40px;
`;

const MarkerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;
const MultipleMarkerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 0 48px 0 48px;
`;
const Marker = styled.div`
  width: 10px;
  height: 10px;
  background-color: #daa520;
  border-radius: 30px;
`;

interface Props {
  boardMarkers: number;
}

const BoardSegment: FunctionComponent<Props> = (props: Props) => {
  const { boardMarkers } = props;
  const renderBoardMarkers = () => {
    let boardMarkersContainer: React.ReactElement[] = [];
    for (let i = 0; i < boardMarkers; i++) {
      boardMarkersContainer.push(<Marker key={i}></Marker>);
    }
    return boardMarkersContainer;
  };

  return (
    <Root>
      {boardMarkers === 2 ? (
        <MultipleMarkerWrapper>{renderBoardMarkers()}</MultipleMarkerWrapper>
      ) : (
        <MarkerWrapper>{renderBoardMarkers()}</MarkerWrapper>
      )}
    </Root>
  );
};

export default BoardSegment;
