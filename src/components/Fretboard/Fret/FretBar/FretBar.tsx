import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Root = styled.div`
  position: absolute;
  top: 0;
  height: 300px;
  width: 3px;
  background: #ccc;
`;

// background: linear-gradient(
//   90deg,
//   rgba(223, 205, 159, 1) 0%,
//   rgba(218, 165, 32, 1) 13%,
//   rgba(218, 165, 32, 1) 87%,
//   rgba(223, 205, 159, 1) 100%
// );
const Fret: FunctionComponent = (props) => {
  return <Root></Root>;
};

export default Fret;
