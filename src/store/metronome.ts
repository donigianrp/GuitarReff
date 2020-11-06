import { handleActions, createAction } from "redux-actions";

// Model
export interface MetronomeModel {
  bpm: number;
  currentQtrNote: number;
}

// Initial State
const initialState: MetronomeModel = {
  bpm: 120,
  currentQtrNote: 0,
};

// Reducer
interface Payload<T> {
  payload: T;
}

export type MetronomeDispatchParam =
  | {
      type: "UPDATE_BPM";
      payload: number;
    }
  | {
      type: "UPDATE_CURRENT_QTR_NOTE";
      payload: string;
    };

export const metronomeReducer = handleActions<MetronomeModel, any>(
  {
    UPDATE_BPM: (state, action: Payload<number>) => {
      if (action.payload) {
        return {
          ...state,
          bpm: action.payload,
        };
      }
      return state;
    },
    UPDATE_CURRENT_QTR_NOTE: (state, action: Payload<number>) => {
      if (Number.isInteger(action.payload)) {
        return {
          ...state,
          currentQtrNote: action.payload,
        };
      }
      return state;
    },
  },
  initialState
);
