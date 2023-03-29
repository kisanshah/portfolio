import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "src/styles/AppTheme";
const savedThemePreference = localStorage.getItem("themePreference");
const dark = savedThemePreference ? savedThemePreference === "dark" : true;

const lightThemeTemp = structuredClone(lightTheme);
const darkThemeTemp = structuredClone(darkTheme);

let lightColors = [
  "#33d9b2",
  "#ff793f",
  "#25CCF7",
  "#FEA47F",
  "#2bcbba",
  "#18dcff",
];
lightThemeTemp.primary =
  lightColors[Math.round(lightColors.length * Math.random())];

let darkColors = ["#fc5c65", "#fd9644", "#9980FA", "#12CBC4"];
darkThemeTemp.primary =
  darkColors[Math.round(darkColors.length * Math.random())];

const initialState = {
  isDarkModeEnabled: dark,
  theme: dark ? darkThemeTemp : lightThemeTemp,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setTheme: (state, action: any) => {
      state.isDarkModeEnabled = !state.isDarkModeEnabled;
      localStorage.setItem(
        "themePreference",
        state.isDarkModeEnabled ? "dark" : "light"
      );
      state.theme = state.isDarkModeEnabled ? darkThemeTemp : lightThemeTemp;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
