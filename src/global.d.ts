// *****************Notes******************
export type BoardDisplay = BoardDisplayString[];

export interface BoardDisplayNote {
  note: Note;
  isSelected: boolean;
  highlight: Highlight[];
}

export type BoardDisplayString = BoardDisplayNote[];

export interface Chord {
  name: ChordName;
  note: Note[];
}

export type ChordName =
  | "Major"
  | "Minor"
  | "Seventh"
  | "Sixth"
  | "Suspended"
  | "Diminished"
  | "Triad"
  | "Split";

export type DisplayTypes = "Note" | "Mode" | "Scale" | "Chord";
export type DisplayValue = Note | Mode | Scale | Chord;

export interface FretboardString {
  open: Note;
  frets: Note[];
}

export type Fretboard = FretboardString[];

export interface Highlight {
  type: DisplayTypes;
  value: DisplayValue;
  color: string;
}

export interface Mode {
  scale: ScaleName;
  name: ModeName;
  note: Note;
}

export type ModeName =
  | "Ionian"
  | "Dorian"
  | "Phrygian"
  | "Lydian"
  | "Mixolydian"
  | "Aeolian"
  | "Locrian";

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
  | "G#";

export interface Scale {
  name: ScaleName;
  note: Note;
}

export type ScaleName =
  | "Major Pentatonic"
  | "Minor Pentatonic"
  | "Major Blues"
  | "Minor Blues"
  | "Natural Major"
  | "Natural Minor";

// ******************State Management*******************
export interface StateProps {
  selectedNotes: Note[];
  fretboard: Note[][] | null;
  noteDisplay: Note[][] | null;
}

// ******************UI Components*********************

export interface DialOption<T> {
  label: T;
  bottom: number;
  left: number;
}
