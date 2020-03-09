import {
  handleActions,
  createAction,
  ActionFunction1,
  Action
} from "redux-actions";
import { Note } from "../global";

// Helper Functions
export const fretboard = (tuning: Note[], size: number = 22) => {
  const mapped = tuning.map(note => {
    return [...orderNotesArr(note), ...orderNotesArr(note).slice(0, size - 11)];
  });
  return mapped;
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

// Model
export interface FretboardModel {
  boardDisplay: Note[][];
  tuning: Note[];
  selectedNotes: Note[][];
}

// Initial State
const initialState: FretboardModel = {
  boardDisplay: fretboard(["E", "A", "D", "G", "B", "E"]),
  tuning: ["E", "A", "D", "G", "B", "E"],
  selectedNotes: []
};

// Actions
export interface FretboardActions {
  updateTuning: ActionFunction1<Note[], Action<Note[]>>;
  updateSelectedNotes: ActionFunction1<Note[], Action<Note[]>>;
}

export const fretboardActions: FretboardActions = {
  updateTuning: createAction<Note[]>("UPDATE_TUNING"),
  updateSelectedNotes: createAction<Note[]>("UPDATE_SELECTED_NOTES")
};

// Reducer
interface Payload<T> {
  payload: T;
}

export type FretboardDispatchParam =
  | {
      type: "UPDATE_TUNING";
      payload: Note[];
    }
  | {
      type: "UPDATE_SELECTED_NOTES";
      payload: Note[][];
    };

export const fretboardReducer = handleActions<FretboardModel, any>(
  {
    UPDATE_TUNING: (state, action: Payload<Note[]>) => {
      if (action.payload) {
        return {
          ...state,
          tuning: action.payload,
          boardDisplay: fretboard(action.payload)
        };
      }
      return state;
    },
    UPDATE_SELECTED_NOTES: (state, action: Payload<Note[][]>) => {
      if (action.payload) {
        return { ...state, selectedNotes: action.payload };
      }
      return state;
    }
  },
  initialState
);

/*board = [
  [
    { 
      note: Note,
      isSelected: boolean,
      color: string,
    }
  ],
  [],
  [],
  [],
  [],
  [],
]

tuning:  ["E", "A", "D", "G", "B", "E"],
selectedNotes: ["A","C#", "E"],
selectedScales: ["B major"],
selectedModes: ["D ionian"],
selectedChords: ["F#maj7"]
*/
