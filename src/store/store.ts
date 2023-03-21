import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./reducers/navBarSlice";
import projectReducer from "./reducers/projectSlice";
import themeReducer from "./reducers/themeSlice";
import workReducer from "./reducers/workSlice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    theme: themeReducer,
    work: workReducer,
    project: projectReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
