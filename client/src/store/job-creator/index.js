import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    jobPosts: [],
    singlejob: null,
                         
};
export const createJobPost = createAsyncThunk(
    "jobCreator/createJobPost",                     
    async (formData) => {                                                                                                                                                                                                                   

        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/job-creator/create-job`,
            formData,
            {
                withCredentials: true,
            }
        );
        return response.data;
    }                                               
);                                                                                          

export const getAllJobs = createAsyncThunk(                                                         
    "jobCreator/getAllJobs",                                                                          
    async () => {                                                                                       
        const response = await axios.get(                                                               
            `${import.meta.env.VITE_BACKEND_URL}/job-creator/all-jobs`,                                            
            { withCredentials: true }                                                                   
        );                                                                                               
        return response.data;                                                                           
    }                                                                                                  
);
export const getJobById = createAsyncThunk(
    "jobCreator/getJobById",
    async (id) => {                                                   

        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/job-creator/${id}`,
            { withCredentials: true }
        );
        return response.data;
    }                                               
);                                                                  

export const updateJob = createAsyncThunk(                                                      

    "jobCreator/updateJob",                                                                         
    async ({ id, formData }) => {                                                                    
        const response = await axios.put(                                                               
            `${import.meta.env.VITE_BACKEND_URL}/job-creator/${id}`,                                               
            formData,                                                                                   
            { withCredentials: true }                                                                   
        );                                                                                               
        return response.data;                                                                          
    }                                       
);                                                                  

export const deleteJob = createAsyncThunk(                          

    "jobCreator/deleteJob",                                                         

    async (id) => {                                                                                                                 

        const response = await axios.delete(
            `${import.meta.env.VITE_BACKEND_URL}/job-creator/${id}`,
            { withCredentials: true }
        );
        return response.data;
    }                                                                       

);                                                                      

const jobCreatorSlice = createSlice({                                                               
    name: "jobCreator",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            
            .addCase(getAllJobs.fulfilled, (state, action) => {
                state.jobPosts = action.payload.Alljobs;
            })
            .addCase(getJobById.fulfilled, (state, action) => {
                state.singlejob = action.payload.job;
            })

    },
});

// export const { setUser } = jobCreatorSlice.actions;     


export default jobCreatorSlice.reducer; 


