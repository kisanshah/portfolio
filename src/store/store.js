import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./reducers/navBarSlice";

export default configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});
