import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.js";
import jobCreatorSlice from "./job-creator/index.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
    jobCreator: jobCreatorSlice,
  },
});

export default store;