import { createSlice } from "@reduxjs/toolkit";

export const navBarSlice = createSlice({
  name: "navbar",
  initialState: {
    current: "home",
    navItems: [
      { id: 1, label: "Home", route: "/#home" },
      { id: 4, label: "Project", route: "/#projects" },
      { id: 3, label: "Work", route: "/#work" },
      { id: 2, label: "About", route: "/#about" },
      { id: 5, label: "Contact", route: "/#contact" },
    ],
  },
  reducers: {
    setCurrentNav: (state, action: any) => {
      state.current = action.payload;
    },
  },
});
export const { setCurrentNav } = navBarSlice.actions;

export default navBarSlice.reducer;
