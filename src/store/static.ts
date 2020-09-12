import { BoardDisplayNote, ScaleName, ModeName } from "../global";

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

export const jimmyPageTuning: BoardDisplayNote[] = [
  {
    note: "D",
    isSelected: false,
    highlight: [],
  },
  {
    note: "A",
    isSelected: false,
    highlight: [],
  },
  {
    note: "G",
    isSelected: false,
    highlight: [],
  },
  {
    note: "D",
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
];
