export const clusters = {
  durkheimien: {
    id: "durkheimien",
    label: "Durkheimien",
    center: { x: 160, y: 200 },
    color: "#7fb3e8",
    authors: ["durkheim"],
    blend: ["weberien"],
  },

  weberien: {
    id: "weberien",
    label: "Wébérien",
    center: { x: 720, y: 200 },
    color: "#d88b8b",
    authors: ["weber"],
    blend: ["bourdieusien"],
  },

  bourdieusien: {
    id: "bourdieusien",
    label: "Bourdieusien",
    center: { x: 420, y: 420 },
    color: "#b8d87d",
    authors: ["bourdieu"],
    blend: ["durkheimien", "weberien"],
  },

  hybride: {
    id: "hybride",
    label: "Zones hybrides",
    center: { x: 520, y: 320 },
    color: "#b0b0b0",
    authors: ["lahire", "dubet", "martuccelli"],
    blend: ["bourdieusien", "weberien"],
  },
};
