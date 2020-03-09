import { Action, Reducer, Dispatch } from "redux";
import { Note } from "../global";
import { noteDisplay } from "../context/GlobalState";

export interface InitialState {
  selectedNotes: Note[];
  fretboard: Note[][] | null;
  noteDisplay: Note[][] | null;
}

export const fretboard = (tuning: Note[], size: number = 22) => {
  const mapped = tuning.map(note => {
    return [...orderNotesArr(note), ...orderNotesArr(note).slice(0, size - 11)];
  });
  console.log(mapped);
  return mapped;
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

const orderNotesArr = (startNote: Note) => {
  const startIdx = notes.indexOf(startNote);
  return [...notes.slice(startIdx), ...notes.slice(0, startIdx)];
};

export const initialState: InitialState = {
  selectedNotes: [],
  fretboard: fretboard(["E", "A", "D", "G", "B", "E"]),
  noteDisplay: null
};

export interface DispatchAction extends Action<ActionType> {
  payload: Partial<InitialState>;
}

export enum ActionType {
  UpdateSelectedNotes,
  UpdateFretboardTuning,
  UpdateNoteDisplay
}

export class RootDispatcher {
  private readonly dispatch: Dispatch<DispatchAction>;

  constructor(dispatch: Dispatch<DispatchAction>) {
    this.dispatch = dispatch;
  }

  updateSelectedNotes = (selectedNotes: Note[]) => {
    return this.dispatch({
      type: ActionType.UpdateSelectedNotes,
      payload: { selectedNotes }
    });
  };

  updateFretboardTuning = (fretboard: Note[][] | null) => {
    return this.dispatch({
      type: ActionType.UpdateFretboardTuning,
      payload: { fretboard }
    });
  };

  updateNoteDisplay = (note: Note | null) => {
    const chooseFret = (n: number, addOn: number) => {
      return n + addOn > 22 ? n + addOn - 24 : n + addOn;
    };
    const updateDisplay = (note: Note | null): (Note | null)[][] => {
      const initial = Array(23).fill(null);
      let total: (Note | null)[][] = [];
      for (let i = 0; i < 6; i++) {
        total.push(initial.slice());
      }
      const addOn =
        notes.indexOf(note) > 22
          ? notes.indexOf(note) - 24
          : notes.indexOf(note);

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

    const noteDisplay = updateDisplay(note) || [[]];
    return this.dispatch({
      type: ActionType.UpdateNoteDisplay,
      payload: { noteDisplay }
    });
  };
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (
  state = initialState,
  action
) => {
  if (action.type === ActionType.UpdateSelectedNotes) {
    return { ...state, selectedNotes: action.payload.selectedNotes || [] };
  } else if (action.type === ActionType.UpdateFretboardTuning) {
    return { ...state, fretboard: action.payload.fretboard || [] };
  } else if (action.type === ActionType.UpdateNoteDisplay) {
    return { ...state, noteDisplay: action.payload.noteDisplay || [] };
  } else {
    return state;
  }
};
