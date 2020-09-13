import { handleActions } from "redux-actions";
import {
  BoardDisplay,
  BoardDisplayNote,
  Fretboard,
  Mode,
  ModeName,
  Note,
  Scale,
  ScaleName,
} from "../global";
import {
  boardDisplay,
  fretboard,
  modeBoardDisplay,
  scaleNotes,
  updateBoardDisplay,
} from "./helpers";
import { standardTuning } from "./static";

// Model
export interface FretboardModel {
  boardDisplay: BoardDisplay;
  tuning: BoardDisplayNote[];
  fretboard: Fretboard;
  selectedNotes: Note[];
  selectedScale: Scale | null;
  selectedScaleName: ScaleName | "none";
  selectedMode: Mode | null;
  selectedModeName: ModeName | "all";
  selectedRoot: Note | "none";
}

// Initial State
const initialState: FretboardModel = {
  boardDisplay: boardDisplay(standardTuning),
  tuning: standardTuning,
  fretboard: fretboard(standardTuning),
  selectedNotes: [],
  selectedScale: null,
  selectedScaleName: "none",
  selectedMode: null,
  selectedModeName: "all",
  selectedRoot: "none",
};

// Reducer
interface Payload<T> {
  payload: T;
}

export type FretboardDispatchParam =
  | {
      type: "UPDATE_TUNING";
      payload: BoardDisplayNote[];
    }
  | {
      type: "SELECT_NOTE";
      payload: Note;
    }
  | {
      type: "SELECT_SCALE";
      payload: Scale | null;
    }
  | {
      type: "SELECT_SCALE_NAME";
      payload: ScaleName | "none";
    }
  | {
      type: "SELECT_MODE";
      payload: Mode | null;
    }
  | {
      type: "SELECT_MODE_NAME";
      payload: ModeName | "all";
    }
  | {
      type: "SELECT_ROOT";
      payload: Note | "none";
    };

export const fretboardReducer = handleActions<FretboardModel, any>(
  {
    UPDATE_TUNING: (state, action: Payload<BoardDisplayNote[]>) => {
      if (action.payload) {
        return {
          ...state,
          tuning: action.payload,
          boardDisplay: boardDisplay(action.payload),
        };
      }
      return state;
    },
    SELECT_NOTE: (state, action: Payload<Note>) => {
      if (action.payload && state.selectedNotes.includes(action.payload)) {
        let updatedNotes: Note[] = state.selectedNotes.filter(
          (note) => note !== action.payload
        );

        const updatedDisplay = updateBoardDisplay(
          state.boardDisplay,
          updatedNotes
        );
        return {
          ...state,
          selectedNotes: updatedNotes,
          boardDisplay: updatedDisplay,
        };
      } else if (action.payload) {
        const updatedDisplay = updateBoardDisplay(state.boardDisplay, [
          ...state.selectedNotes,
          action.payload,
        ]);
        // ADD IN FUNCTIONALITY TO REMOVE NOTE ON 2ND CLICK
        return {
          ...state,
          selectedNotes: [...state.selectedNotes, action.payload],
          boardDisplay: updatedDisplay,
        };
      }
      return state;
    },
    SELECT_SCALE: (state, action: Payload<Scale | null>) => {
      if (action.payload) {
        const updatedNotes: Note[] = scaleNotes(action.payload).map(
          (detail) => detail.note
        );
        const updatedDisplay = updateBoardDisplay(
          state.boardDisplay,
          updatedNotes
        );
        return {
          ...state,
          selectedNotes: [],
          selectedScale: action.payload,
          boardDisplay: updatedDisplay,
        };
      } else {
        return {
          ...state,
          selectedNotes: [],
          selectedScale: null,
          boardDisplay: boardDisplay(standardTuning),
        };
      }
    },
    SELECT_MODE: (state, action: Payload<Mode | null>) => {
      if (action.payload) {
        return {
          ...state,
          selectedNotes: [],
          selectedMode: action.payload,
          boardDisplay: modeBoardDisplay(state.boardDisplay, action.payload),
        };
      } else {
        return {
          ...state,
          selectedNotes: [],
          selectedMode: null,
          boardDisplay: boardDisplay(standardTuning),
        };
      }
    },
    SELECT_ROOT: (state, action: Payload<Note | "none">) => {
      if (action.payload) {
        return {
          ...state,
          selectedRoot: action.payload,
        };
      } else {
        return state;
      }
    },
    SELECT_SCALE_NAME: (state, action: Payload<ScaleName | "none">) => {
      if (action.payload) {
        return {
          ...state,
          selectedScaleName: action.payload,
        };
      } else {
        return state;
      }
    },
    SELECT_MODE_NAME: (state, action: Payload<ModeName | "all">) => {
      if (action.payload) {
        return {
          ...state,
          selectedModeName: action.payload,
        };
      } else {
        return state;
      }
    },
  },
  initialState
);
