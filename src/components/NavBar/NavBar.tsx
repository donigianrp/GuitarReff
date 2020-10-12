import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Root = styled.div`
  height: 50px;
  background: #777;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const Title = styled.div`
  font-size: 28px;
  color: #fff;
`;

const NavBar: FunctionComponent = (props) => {
  return (
    <Root>
      <Title>Guitar Reff</Title>
    </Root>
  );
};

export default NavBar;
