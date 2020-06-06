import {
  BoardDisplayNote,
  BoardDisplay,
  Note,
  Fretboard,
  FretboardString,
  Scale,
  Mode,
  BoardDisplayString,
} from "../global";
import { initialNotes, modeMap } from "./static";
import { scales } from "./static";

export const boardDisplay = (
  tuning: BoardDisplayNote[],
  size: number = 22
): BoardDisplay => {
  const mapped: BoardDisplay = tuning.map((noteDetails) => {
    const ordered = orderNotesArr(noteDetails.note);
    return [...ordered, ...ordered?.slice(0, size - 11)];
  });
  return mapped;
};

export const updateBoardDisplay = (
  currentDisplay: BoardDisplay,
  selectedNotes: Note[]
): BoardDisplay => {
  return currentDisplay.map((string) => {
    return string.map((fret) => {
      if (selectedNotes.includes(fret.note)) {
        return {
          ...fret,
          isSelected: true,
        };
      } else {
        return {
          ...fret,
          isSelected: false,
        };
      }
    });
  });
};

export const fretboard = (
  tuning: BoardDisplayNote[],
  size: number = 22
): Fretboard => {
  const mapped: Fretboard = tuning.map((noteDetails) => {
    const ordered = orderNotesArr(noteDetails.note);
    const string: FretboardString = {
      open: ordered[0].note,
      frets: [
        ...ordered.map((fret) => fret.note),
        ...ordered?.slice(0, size - 11).map((fret) => fret.note),
      ],
    };
    return string;
  });
  return mapped;
};

export const orderNotesArr = (startNote: Note): BoardDisplayNote[] => {
  const startIdx = initialNotes.findIndex(
    (noteDetails) => noteDetails.note === startNote
  );

  return [...initialNotes.slice(startIdx), ...initialNotes.slice(0, startIdx)];
};

export const scaleNotes = (scale: Scale): BoardDisplayNote[] => {
  const orderedNotes = orderNotesArr(scale.note);
  return scales[scale.name].map((position) => {
    return orderedNotes[position];
  });
};

export const modeNotes = (mode: Mode): BoardDisplayNote[] => {
  const orderedNotes = scaleNotes({
    name: "Natural Major",
    note: mode.note,
  });
  let modeOrdered: BoardDisplayNote[] = [];
  if (modeMap[mode.name] === 0) {
    modeOrdered = orderedNotes;
  } else {
    modeOrdered = [
      ...orderedNotes.slice(modeMap[mode.name]),
      ...orderedNotes.slice(0, modeMap[mode.name]),
    ];
  }
  return modeOrdered;
};

export const modeBoardDisplay = (
  currentDisplay: BoardDisplay,
  mode: Mode
): BoardDisplay => {
  const modeOrderedNotes = modeNotes(mode);
  let repeated = [
    ...modeOrderedNotes,
    ...modeOrderedNotes,
    ...modeOrderedNotes,
  ];

  let root: number | null = null;

  const isWithinRange = (r: number | null, idx: number) => {
    let check = false;
    if (r) {
      if (idx >= r - 1 && idx <= r + 3) {
        check = true;
      }
    }
    return check;
  };

  return currentDisplay.reduce(
    (boardAcc: BoardDisplay, string: BoardDisplayString, stringIdx: number) => {
      return [
        ...boardAcc,
        string.reduce(
          (
            stringAcc: BoardDisplayString,
            fret: BoardDisplayNote,
            fretIdx: number
          ) => {
            let isSelected = false;
            // if it's first string, the root hasn't been set and the first note in orderNotes equals the current note, set root
            if (stringIdx === 0 && !root && repeated[0].note === fret.note) {
              root = fretIdx;
            }
            if (
              root &&
              isWithinRange(root, fretIdx) &&
              repeated[0].note === fret.note
            ) {
              repeated = [...repeated.slice(1)];
              isSelected = true;
            }
            return [
              ...stringAcc,
              {
                ...fret,
                isSelected,
              },
            ];
          },
          []
        ),
      ];
    },
    []
  );
};
