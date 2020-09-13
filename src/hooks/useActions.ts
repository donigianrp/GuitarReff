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
      if (
        payload !== "none" &&
        selectedRoot !== "none" &&
        selectedModeName !== "all"
      ) {
        const mode = {
          scale: payload,
          name: selectedModeName,
          note: selectedRoot,
        };
        dispatch({
          type: "SELECT_MODE",
          payload: mode,
        });
      } else if (payload !== "none" && selectedRoot !== "none") {
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
      if (
        payload !== "all" &&
        selectedScaleName !== "none" &&
        selectedRoot !== "none"
      ) {
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
        selectedRoot !== "none"
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
    handleRootChange: (payload: Note | "none") => {
      if (payload === "none") {
        dispatch({
          type: "SELECT_SCALE",
          payload: null,
        });
      } else if (selectedScaleName !== "none") {
        if (selectedModeName !== "all") {
          const mode = {
            scale: selectedScaleName,
            name: selectedModeName,
            note: payload,
          };
          dispatch({
            type: "SELECT_MODE",
            payload: mode,
          });
        } else {
          const scale = {
            name: selectedScaleName,
            note: payload,
          };
          dispatch({
            type: "SELECT_SCALE",
            payload: scale,
          });
        }
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
    setSelectedRoot: (payload: Note | "none") => {
      dispatch({
        type: "SELECT_ROOT",
        payload,
      });
    },
  };
};
