import { useSelector } from "react-redux";
import { useTypedDispatch } from "../store";
import { MetronomeModel } from "../store/metronome";
import { RootState } from "../store/state";

export const useMetronomeActions = () => {
  const dispatch = useTypedDispatch();
  const {} = useSelector<RootState, MetronomeModel>((state) => state.metronome);
  return {
    updateBPM: (payload: number) => {
      dispatch({
        type: "UPDATE_BPM",
        payload,
      });
    },
    updateCurrentQtrNote: (payload: string) => {
      dispatch({
        type: "UPDATE_CURRENT_QTR_NOTE",
        payload,
      });
    },
  };
};
