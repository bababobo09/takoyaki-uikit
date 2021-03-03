import {Colors} from "./types";

export const baseColors = {
  failure: "#db504a",
  primary: "#8a6a10",
  primaryBright: "#C35B0F",
  primaryDark: "#DB8439",
  secondary: "#BB4D00",
  success: "#a7c957",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#f2f2f2", tertiary: "#EFF4F5", text: '#242424', textDisabled: '#998c83', textSubtle: '#424242', borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
    bubblegum: "linear-gradient(139.73deg, #fff9e6 0%, #fff8f2 100%)",
  }
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#DD7A35", background: "#343135", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#58565c",
  // primaryDark: "#0098A1",
  tertiary: "#353547", text: "#f7f7f7", textDisabled: "#666171", textSubtle: "#d2d2d4", borderColor: "#615f66", card: "#27262c", gradients: {
    bubblegum: "linear-gradient(139.73deg, #5c4a31 0%, #543e2a 100%)",
  }
};
