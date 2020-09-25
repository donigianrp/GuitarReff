import { BoardDisplayNote, ScaleName, ModeName, Note } from "../global";

export const initialNotes: BoardDisplayNote[] = [
  { note: "A", isSelected: false, highlight: [] },
  { note: "A#", isSelected: false, highlight: [] },
  { note: "B", isSelected: false, highlight: [] },
  { note: "C", isSelected: false, highlight: [] },
  { note: "C#", isSelected: false, highlight: [] },
  { note: "D", isSelected: false, highlight: [] },
  { note: "D#", isSelected: false, highlight: [] },
  { note: "E", isSelected: false, highlight: [] },
  { note: "F", isSelected: false, highlight: [] },
  { note: "F#", isSelected: false, highlight: [] },
  { note: "G", isSelected: false, highlight: [] },
  { note: "G#", isSelected: false, highlight: [] },
];

type Scales = {
  [key in ScaleName]: number[];
};

export const scales: Scales = {
  "Natural Major": [0, 2, 4, 5, 7, 9, 11],
  "Natural Minor": [0, 2, 3, 5, 7, 8, 10],
  "Major Pentatonic": [0, 2, 4, 7, 9],
  "Minor Pentatonic": [0, 3, 5, 7, 10],
  "Major Blues": [0, 2, 3, 4, 7, 9],
  "Minor Blues": [0, 3, 5, 6, 7, 10],
};

type Modes = {
  [key in ModeName]: number;
};

export const modes: Modes = {
  Ionian: 0,
  Dorian: 1,
  Phrygian: 2,
  Lydian: 3,
  Mixolydian: 4,
  Aeolian: 5,
  Locrian: 6,
};

// ************************Tunings*************************

export type Frequencies = {
  [k in Note]: [number, number, number, number];
};

export const frequencies: Frequencies = {
  E: [82.41, 164.8, 329.6, 659.3],
  F: [87.31, 174.6, 349.2, 698.5],
  "F#": [92.5, 185.0, 370.0, 740.0],
  G: [98.0, 196.0, 392.0, 784.0],
  "G#": [103.8, 207.7, 415.3, 830.6],
  A: [110.0, 220.0, 440.0, 880.0],
  "A#": [116.5, 233.1, 466.2, 932.3],
  B: [123.5, 246.9, 493.9, 987.8],
  C: [130.8, 261.6, 523.3, 1047],
  "C#": [138.6, 277.2, 554.4, 1109],
  D: [146.8, 293.7, 587.3, 1175],
  "D#": [155.6, 311.1, 622.3, 1245],
};

export const standardTuning: BoardDisplayNote[] = [
  {
    note: "E",
    isSelected: false,
    highlight: [],
  },
  {
    note: "A",
    isSelected: false,
    highlight: [],
  },
  {
    note: "D",
    isSelected: false,
    highlight: [],
  },
  {
    note: "G",
    isSelected: false,
    highlight: [],
  },
  {
    note: "B",
    isSelected: false,
    highlight: [],
  },
  {
    note: "E",
    isSelected: false,
    highlight: [],
  },
];
