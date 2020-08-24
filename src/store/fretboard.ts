import { handleActions } from "redux-actions";
import {
  BoardDisplay,
  BoardDisplayNote,
  Fretboard,
  Mode,
  Note,
  Scale,
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
  selectedMode: Mode | null;
}

// Initial State
const initialState: FretboardModel = {
  boardDisplay: boardDisplay(standardTuning),
  tuning: standardTuning,
  fretboard: fretboard(standardTuning),
  selectedNotes: [],
  selectedScale: null,
  selectedMode: null,
};

// // Actions
// export interface FretboardActions {
//   updateTuning: ActionFunction1<BoardDisplayNote[], Action<BoardDisplayNote[]>>;
//   selectNote: ActionFunction1<Note, Action<Note>>;
// }

// export const fretboardActions: FretboardActions = {
//   updateTuning: createAction<BoardDisplayNote[]>("UPDATE_TUNING"),
//   selectNote: createAction<Note>("SELECT_NOTE"),
// };

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
      payload: Scale;
    }
  | {
      type: "SELECT_MODE";
      payload: Mode;
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
    SELECT_SCALE: (state, action: Payload<Scale>) => {
      const updatedNotes: Note[] = scaleNotes(action.payload).map(
        (detail) => detail.note
      );
      const updatedDisplay = updateBoardDisplay(
        state.boardDisplay,
        updatedNotes
      );
      if (action.payload) {
        return {
          ...state,
          selectedNotes: updatedNotes,
          selectedScale: action.payload,
          boardDisplay: updatedDisplay,
        };
      } else {
        return state;
      }
    },
    SELECT_MODE: (state, action: Payload<Mode>) => {
      console.log(modeBoardDisplay(state.boardDisplay, action.payload));

      if (action.payload) {
        return {
          ...state,
          selectedMode: action.payload,
          boardDisplay: modeBoardDisplay(state.boardDisplay, action.payload),
        };
      } else {
        return state;
      }
    },
  },
  initialState
);
