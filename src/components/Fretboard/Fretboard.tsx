import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Fret from "./Fret/Fret";

const Root = styled.div`
  height: 600px;
  width: 360px;
`;

const Fretboard: FunctionComponent = props => {
  const renderFrets = () => {
    let fretContainer: React.ReactElement[] = [];
    for (let i = 1; i <= 22; i++) {
      if ([3, 5, 7, 9, 15, 17, 19, 21].includes(i)) {
        fretContainer.push(<Fret fretPosition={i} markerAmount={1} />);
      } else if (i === 12) {
        fretContainer.push(<Fret fretPosition={i} markerAmount={2} />);
      } else {
        fretContainer.push(<Fret fretPosition={i} markerAmount={0} />);
      }
    }
    return fretContainer;
  };
  return <Root>{renderFrets()}</Root>;
};

export default Fretboard;
