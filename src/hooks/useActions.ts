import { ScaleName, ModeName, Note } from "../global";
import { useSelector } from "react-redux";
import { FunctionComponent } from "react";
import { useTypedDispatch } from "../store";
import { RootState } from "../store/state";
import { FretboardModel } from "../store/fretboard";

export const useActions = () => {
  const dispatch = useTypedDispatch();
  const { selectedScaleName, selectedModeName, selectedRoot } = useSelector<
    RootState,
    FretboardModel
  >((state) => state.fretboard);
  return {
    setSelectedScale: (payload: ScaleName | "none") => {
      if (payload !== "none" && selectedRoot && selectedModeName !== "all") {
        const mode = {
          scale: payload,
          name: selectedModeName,
          note: selectedRoot,
        };
        dispatch({
          type: "SELECT_MODE",
          payload: mode,
        });
      } else if (payload !== "none" && selectedRoot) {
        const scale = {
          name: payload,
          note: selectedRoot,
        };
        dispatch({
          type: "SELECT_SCALE",
          payload: scale,
        });
      } else if (payload === "none") {
        dispatch({
          type: "SELECT_SCALE",
          payload: null,
        });
      }
    },
    setSelectedMode: (payload: ModeName | "all") => {
      if (payload !== "all" && selectedScaleName !== "none" && selectedRoot) {
        const mode = {
          scale: selectedScaleName,
          name: payload,
          note: selectedRoot,
        };
        dispatch({
          type: "SELECT_MODE",
          payload: mode,
        });
      } else if (
        payload === "all" &&
        selectedScaleName !== "none" &&
        selectedRoot
      ) {
        const scale = {
          name: selectedScaleName,
          note: selectedRoot,
        };
        dispatch({
          type: "SELECT_SCALE",
          payload: scale,
        });
      }
    },
    setSelectedScaleName: (payload: ScaleName | "none") =>
      dispatch({
        type: "SELECT_SCALE_NAME",
        payload,
      }),
    setSelectedModeName: (payload: ModeName | "all") =>
      dispatch({
        type: "SELECT_MODE_NAME",
        payload,
      }),
    setSelectedRoot: (payload: Note | null) =>
      dispatch({
        type: "SELECT_ROOT",
        payload,
      }),
  };
};
