import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    courses: [],
    error: '',
};

const API_URL = 'http://127.0.0.1:3000/api/v1';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
    try{
        const response = await axios.get(`${API_URL}/courses`, {
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDFlM2Q3Ni1kMDI4LTQyOGItODNjMy0zYTU5YzdjMjIzNjYiLCJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjkyNzU3OTc1LCJleHAiOjE2OTI3NTk3NzV9.YOlD5rVcFkC87KS8S-FDocoz7tpcMlDka2JK1fJqA0E',
            }, // TODO: Replace this with your the token taken from the user
        });
        return response.data;
    }
    catch(error){
        console.log(error);
    }
});

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCourses.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.loading = false;
            state.courses = action.payload;
        });
        builder.addCase(fetchCourses.rejected, (state, action) => {
            state.loading = false;
            state.courses = [];
            state.error = action.payload;
        });
    },
});

export default coursesSlice.reducer;