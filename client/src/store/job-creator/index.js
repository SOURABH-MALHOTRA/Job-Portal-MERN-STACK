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
            "http://localhost:7000/api/job-creator/create-job",
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
            "http://localhost:7000/api/job-creator/all-jobs",                                            
            { withCredentials: true }                                                                   
        );                                                                                               
        return response.data;                                                                           
    }                                                                                                  
);
export const getJobById = createAsyncThunk(
    "jobCreator/getJobById",
    async (id) => {                                                   

        const response = await axios.get(
            `http://localhost:7000/api/job-creator/${id}`,
            { withCredentials: true }
        );
        return response.data;
    }                                               
);                                                                  

export const updateJob = createAsyncThunk(                                                      

    "jobCreator/updateJob",                                                                         
    async ({ id, formData }) => {                                                                    
        const response = await axios.put(                                                               
            `http://localhost:7000/api/job-creator/${id}`,                                               
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
            `http://localhost:7000/api/job-creator/${id}`,
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


