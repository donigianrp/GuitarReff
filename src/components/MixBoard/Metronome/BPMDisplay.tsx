import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { frequencies } from "../../../store/static";

const Root = styled.div``;
const Control = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #aaa;
  cursor: pointer;
`;

const BPMDisplay: FunctionComponent = (props) => {
  const [beats, setBeats] = useState(120); // range from 30 to 250
  const [clicker, setClicker] = useState<any>(null);

  // Metronome audio config
  const audioCxt = new AudioContext();
  const osc: OscillatorNode = audioCxt.createOscillator();
  const gainNode: GainNode = audioCxt.createGain();
  osc.type = "triangle";
  osc.frequency.value = frequencies["C"][2];
  gainNode.connect(audioCxt.destination);
  osc.connect(gainNode);

  /*
    create audio context, oscillator, and gain node
    config osc and gain

    call start
    while clicker is true, repeat clicker volume off and on at set interval
    when clicker turns false call stop
  */

  useEffect(() => {
    if (clicker) {
      osc.start(audioCxt.currentTime);

      while (clicker) {
        gainNode.gain.setValueAtTime(0, audioCxt.currentTime + 0.1);
      }
    }
  }, [clicker]);

  const playSound = () => {
    // osc = audioCxt.createOscillator();
    // const gainNode = audioCxt.createGain();

    gainNode.gain.value = 0.2;
    const currGain = gainNode.gain.value;
    osc.type = "triangle";
    osc.frequency.value = frequencies["C"][2];
    gainNode.connect(audioCxt.destination);
    osc.connect(gainNode);
    osc.start(audioCxt.currentTime);

    // gainNode.gain.setValueAtTime(0, audioCxt.currentTime + 0.1);
    // gainNode.gain.setValueAtTime(currGain, audioCxt.currentTime + 0.2);
    // gainNode.gain.setValueAtTime(0, audioCxt.currentTime + 0.3);
    // gainNode.gain.setValueAtTime(currGain, audioCxt.currentTime + 0.4);
    // gainNode.gain.setValueAtTime(0, audioCxt.currentTime + 0.5);
    // gainNode.gain.setValueAtTime(currGain, audioCxt.currentTime + 0.6);
    // gainNode.gain.setValueAtTime(0, audioCxt.currentTime + 0.7);
    // gainNode.gain.setValueAtTime(currGain, audioCxt.currentTime + 0.8);
    // gainNode.gain.setValueAtTime(0, audioCxt.currentTime + 0.9);
    // gainNode.gain.setValueAtTime(currGain, audioCxt.currentTime + 1);

    setInterval(
      gainNode.gain.setValueAtTime(0, audioCxt.currentTime + 0.1),
      0.1
    );
    osc.stop(audioCxt.currentTime + 1.1);
    if (clicker) {
      // metroClick.currentTime = 2;
      // setClicker(setInterval(() => metroClick.play(), 50));
    }
  };

  const stopSound = () => {
    console.log("stop", audioCxt.currentTime);
    osc.stop();
  };
  return (
    <Root>
      <Control onClick={playSound}>Play</Control>
      <Control onClick={stopSound}>Stop</Control>
    </Root>
  );
};

export default BPMDisplay;
