import { createSlice } from "@reduxjs/toolkit";

export const navBarSlice = createSlice({
  name: "navbar",
  initialState: {
    selectedItem: null,
    navItems: [
      { id: 1, label: "Home", route: "/" },
      { id: 2, label: "About", route: "/about" },
      { id: 3, label: "Work", route: "/work" },
      { id: 4, label: "Project", route: "/projects" },
      { id: 5, label: "Contact", route: "/contact" },
    ],
  },
  reducers: {
    setCurrent: (state, action) => {
      console.log(`Payload ${Object.keys(action.payload)}`);
      state.selectedItem = action.payload;
    },
  },
});

export const { setCurrent } = navBarSlice.actions;
export default navBarSlice.reducer;
