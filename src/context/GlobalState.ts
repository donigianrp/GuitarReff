import { createContext, useContext } from "react";
import { Note } from "../global";

export const fretboard = (tuning: Note[], size: number = 22) => {
  return tuning.map(note => {
    return [...orderNotesArr(note), ...orderNotesArr(note).slice(0, size - 11)];
  });
};

const orderNotesArr = (startNote: Note) => {
  const startIdx = notes.indexOf(startNote);
  return [...notes.slice(startIdx), ...notes.slice(0, startIdx)];
};

export const notes: (Note | null)[] = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#"
];

const chooseFret = (n: number, addOn: number) => {
  return n + addOn > 22 ? n + addOn - 24 : n + addOn;
};

export const noteDisplay = (note: Note): (Note | null)[][] => {
  const initial = Array(23).fill(null);
  let total: (Note | null)[][] = [];
  for (let i = 0; i < 6; i++) {
    total.push(initial.slice());
  }
  const addOn =
    notes.indexOf(note) > 22 ? notes.indexOf(note) - 24 : notes.indexOf(note);

  total[0][chooseFret(5, addOn)] = note;
  total[0][chooseFret(17, addOn)] = note;
  total[1][chooseFret(0, addOn)] = note;
  total[1][chooseFret(12, addOn)] = note;
  total[2][chooseFret(7, addOn)] = note;
  total[2][chooseFret(19, addOn)] = note;
  total[3][chooseFret(2, addOn)] = note;
  total[3][chooseFret(14, addOn)] = note;
  total[4][chooseFret(10, addOn)] = note;
  total[4][chooseFret(22, addOn)] = note;
  total[5][chooseFret(5, addOn)] = note;
  total[5][chooseFret(17, addOn)] = note;
  return total;
};
type Action = { type: "CHANGE_SELECTED_NOTE"; payload: Note | null };
type Dispatch = (action: Action) => void;
export interface IGlobalState {
  fretboard: (Note | null)[][];
  noteDisplay(note: Note): (Note | null)[][];
  selectedNote: Note | null;
}

export const GlobalState = createContext<IGlobalState>({
  fretboard: [[]],
  noteDisplay,
  selectedNote: null
});

export const GlobalDispatch = createContext<Dispatch | undefined>(undefined);

export const GlobalStateProvider = GlobalState.Provider;

export const GlobalStateConsumer = GlobalState.Consumer;

const reducer = (state: IGlobalState, action: Action) => {
  switch (action.type) {
    case "CHANGE_SELECTED_NOTE":
      return { ...state, selectedNote: state.selectedNote };
    default:
      return state;
  }
};

export const useNoteDispatch = () => {
  const context = useContext(GlobalDispatch);
  if (context === undefined) {
    throw new Error("useNoteDispatch must be used within a CountProvider");
  }
  return context;
};
