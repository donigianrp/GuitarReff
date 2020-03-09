// *****************Notes******************
export type Note =
  | "A"
  | "A#"
  | "B"
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | null;

// ******************State Management*******************
export interface StateProps {
  selectedNotes: Note[];
  fretboard: Note[][] | null;
  noteDisplay: Note[][] | null;
}
