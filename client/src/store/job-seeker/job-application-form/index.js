import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: true,
  AllJobApplicationByUserId: [],
};

export const CreateApplicant = createAsyncThunk(
  "jobSeeker/createApplicant",
  async (formData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/job-seeker/createapplicant`,
      formData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);


export const getAllJobApplicationByUserId = createAsyncThunk(
    "jobSeeker/getJobApplicantByUserId",
    async (id) => {                                                   

        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/job-seeker/getapplicant/${id}`,
            { withCredentials: true }
        );
        return response.data;
    }                                               
);   


const jobSeekerSlice = createSlice({
  name: "jobSeeker",
  initialState,
  reducers: {
    
  },
   extraReducers: (builder) => {
         builder
             
             .addCase(getAllJobApplicationByUserId.fulfilled, (state, action) => {
                state.isLoading = action.payload.success
                 state.AllJobApplicationByUserId = action.payload.applicants;
             })
             .addCase(getAllJobApplicationByUserId.pending, (state, action) => {
                state.isLoading = false
             })
            .addCase(getAllJobApplicationByUserId.rejected, (state, action) => {
                state.isLoading = false
             })
     },
});

export default jobSeekerSlice.reducer; 
