import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router";

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
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDFlM2Q3Ni1kMDI4LTQyOGItODNjMy0zYTU5YzdjMjIzNjYiLCJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjkyNzYzNTU1LCJleHAiOjE2OTI3NjUzNTV9.XO5aBpsFt1y1r-jXrIBB-_xj6LK_VhxawAJ7Y3bnplo',
            }, // TODO: Replace this with your the token taken from the user
        });
        return response.data;
    }
    catch(error){
        console.log(error);
    }
});

export const createCourse = createAsyncThunk('courses/createCourse', async (name, teacher, price, photo, description) => {
    try{
        const response = await fetch(`${API_URL}/courses`, {
            method: 'POST',
            body: JSON.stringify(
                    name,
                    teacher,
                    price,
                    photo,
                    description,
            ),
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDFlM2Q3Ni1kMDI4LTQyOGItODNjMy0zYTU5YzdjMjIzNjYiLCJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjkyNzYzNTU1LCJleHAiOjE2OTI3NjUzNTV9.XO5aBpsFt1y1r-jXrIBB-_xj6LK_VhxawAJ7Y3bnplo',
            },
          });

        } 
    catch (error) {
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