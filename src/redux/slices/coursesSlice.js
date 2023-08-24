import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    courses: [],
    error: '',
};

const API_URL = 'http://127.0.0.1:3000/api/v1';
const token = localStorage.getItem('token');


export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
    try{
        const response = await axios.get(`${API_URL}/courses`, {
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': token,
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
        await fetch(`${API_URL}/courses`, {
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
                'Authorization': token,
            },
          });

        } 
    catch (error) {
            console.log(error);
        }
});

export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (id) => {
    try{
        await fetch(`${API_URL}/courses/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
        });
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