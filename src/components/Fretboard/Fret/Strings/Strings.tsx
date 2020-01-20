import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 40px;
`;

const String = styled.div`
  height: 40px;
  width: 1px;
  background-color: #ccc;
`;
interface Props {}

const Strings: FunctionComponent<Props> = (props: Props) => {
  return (
    <Root>
      <String />
      <String />
      <String />
      <String />
      <String />
      <String />
    </Root>
  );
};

export default Strings;
