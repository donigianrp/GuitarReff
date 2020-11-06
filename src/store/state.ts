import { FretboardModel } from "./fretboard";
import { MetronomeModel } from "./metronome";

export interface RootState {
  fretboard: FretboardModel;
  metronome: MetronomeModel;
  router?: any;
}
