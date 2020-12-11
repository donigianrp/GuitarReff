import React, { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ModeName, ScaleName } from "../../../../../global";
import { FretboardModel } from "../../../../../store/fretboard";
import { RootState } from "../../../../../store/state";
import { modes, scales } from "../../../../../store/static";

const Root = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
`;

const Tick = styled.div.attrs((props: { total: number; current: number }) => ({
  total: props.total || 0,
  current: props.current || 0,
}))`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: -5px;
  margin-top: -5px;
  left: 50%;
  top: 50%;
  background: #000;
  transform: rotate(${(props) => props.current * 30 - 140}deg) translate(100px);
`;

const DialContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// transform: rotate(${(props) => props.current}deg) translate(100px);
// color: ${(props) => (props.selected ? "#3553ff" : "#fff")};
interface Props {
  children?: any;
}
const Options: FunctionComponent<Props> = (props: Props) => {
  const { children } = props;
  const { selectedScaleName } = useSelector<RootState, FretboardModel>(
    (state) => state.fretboard
  );

  return (
    <>
      <Root>
        <Tick total={4} current={0} />
        <Tick total={4} current={1} />
        <Tick total={4} current={2} />
        <Tick total={4} current={3} />
        <DialContainer>{children}</DialContainer>
      </Root>
    </>
  );
};

export default Options;
