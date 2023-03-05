import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./reducers/navBarSlice";
import workReducer from "./reducers/workSlice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    work: workReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
