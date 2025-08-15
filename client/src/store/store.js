import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.js";
import jobCreatorSlice from "./job-creator/index.js";
import jobSeekerSlice from "./job-seeker/job-application-form/index.js"
const store = configureStore({
  reducer: {
    auth: authSlice,
    jobCreator: jobCreatorSlice,
    jobSeeker: jobSeekerSlice
  },
});

export default store;