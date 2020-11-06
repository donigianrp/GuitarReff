import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
`;

const MarkerWrapper = styled.div`
  position: absolute;
  top: 145px;
  left: 23.5px;
`;

const Marker = styled.div`
  width: 10px;
  height: 10px;
  background-color: #daa520;
  border-radius: 30px;
`;

const MarkerTop = styled.div`
  width: 10px;
  height: 10px;
  background-color: #daa520;
  border-radius: 30px;
  position: absolute;
  top: 94px;
  left: 23.5px;
`;
const MarkerBottom = styled.div`
  width: 10px;
  height: 10px;
  background-color: #daa520;
  border-radius: 30px;
  position: absolute;
  top: 196px;
  left: 23.5px;
`;

interface Props {
  boardMarkers: number;
}

const BoardSegment: FunctionComponent<Props> = (props: Props) => {
  const { boardMarkers } = props;

  return (
    <Root>
      {boardMarkers === 2 && (
        <div>
          <MarkerTop />
          <MarkerBottom />
        </div>
      )}
      {boardMarkers === 1 && (
        <MarkerWrapper>
          <Marker />
        </MarkerWrapper>
      )}
    </Root>
  );
};

export default BoardSegment;
