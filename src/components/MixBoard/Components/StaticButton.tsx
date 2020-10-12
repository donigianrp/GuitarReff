import React, { FunctionComponent } from "react";
import styled from "styled-components";

const NoteGradient = styled.div`
  color: #fff;
`;

const NoteStyle = styled.div.attrs((props: { selected: boolean }) => ({
  selected: props.selected,
}))`
  height: 62px;
  background: linear-gradient(315deg, #222 1%, #888);
  border-radius: 2px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: ${(props) => (props.selected ? "none" : "0 3px 0px #777")};
  margin-top: ${(props) => (props.selected ? "0px" : "-2px")};
`;

const Outline = styled.div.attrs((props: { selected: boolean }) => ({
  selected: props.selected,
}))`
  margin: 0 5px;
  width: 60px;
  height: 62px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 3px solid ${(props) => (props.selected ? "#3553ff" : "#97a6ff")};
  box-shadow: ${(props) => (props.selected ? "0 0px 10px #4863ff" : "none")};
  -webkit-box-shadow: ${(props) =>
    props.selected ? "0 0px 10px #4863ff" : "none"};
  -moz-box-shadow: ${(props) =>
    props.selected ? "0 0px 10px #4863ff" : "none"};
  -ms-box-shadow: ${(props) =>
    props.selected ? "0 0px 10px #4863ff" : "none"};
  -o-box-shadow: ${(props) => (props.selected ? "0 0px 10px #4863ff" : "none")};
  transition: all 0.1s ease-in-out;
`;

interface Props {
  handleClick: () => void;
  selected: boolean;
  buttonText: HTMLElement | string;
}

const StaticButton: FunctionComponent<Props> = (props: Props) => {
  const { handleClick, selected, buttonText } = props;

  return (
    <Outline selected={selected}>
      <NoteStyle selected={selected} onClick={handleClick}>
        <NoteGradient>{buttonText}</NoteGradient>
      </NoteStyle>
    </Outline>
  );
};

export default StaticButton;
