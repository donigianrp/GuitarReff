import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import pause from "../../../static/pause.png";
import play from "../../../static/play.png";
import { MetronomeModel } from "../../../store/metronome";
import { RootState } from "../../../store/state";
import DynamicButton from "../Components/DynamicButton";
import Dial from "./Dial/Dial";
import { Metronome } from "./Metronome";

const Root = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ControlWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;
const Control = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: #fff;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Play = styled.img`
  display: block;
  height: 30px;
  width: auto;
  margin-left: 5px;
`;
const Pause = styled.img`
  display: block;
  height: 30px;
  width: auto;
`;

const CurrentBPM = styled.input`
  font-size: 50px;
  width: 90px;
  background: #1b1b1b;
  border: none;
  color: #fff;
`;

const MetronomeContainer: FunctionComponent = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [metronome, setMetronome] = useState(new Metronome());

  const { currentQtrNote } = useSelector<RootState, MetronomeModel>(
    (state) => state.metronome
  );

  useEffect(() => {
    if (isPlaying) {
      metronome.stop();
      setMetronome(new Metronome(bpm));
    }
  }, [bpm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedBpm = Number(event.target.value);
    if (updatedBpm) {
      setBpm(updatedBpm);
    } else {
      setBpm(0);
    }
  };

  return (
    <Root>
      <Dial />
      <Dial />
      {/* <MetronomeClass /> */}
      {/* <CurrentBPM value={bpm} onChange={handleChange} />
      <Control
        onClick={() => {
          setIsPlaying(!isPlaying);
          metronome.startStop();
        }}
      >
        {isPlaying ? <Pause src={pause} /> : <Play src={play} />}
      </Control>
      <div>{currentQtrNote}</div>
      <ControlWrapper>
        <DynamicButton
          handleClick={() => {
            setBpm(bpm - 5);
          }}
          buttonText={"-5"}
        />
        <DynamicButton
          handleClick={() => {
            setBpm(bpm - 1);
          }}
          buttonText={"-1"}
        />
        <DynamicButton handleClick={() => {}} buttonText={">II"} />
        <DynamicButton
          handleClick={() => {
            setBpm(bpm + 1);
          }}
          buttonText={"+1"}
        />
        <DynamicButton
          handleClick={() => {
            setBpm(bpm + 5);
          }}
          buttonText={"+5"}
        />
      </ControlWrapper> */}
    </Root>
  );
};

export default MetronomeContainer;
