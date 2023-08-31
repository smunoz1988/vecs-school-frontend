import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    reservations: [],
    error: '',
};

const API_URL = 'https://vecsschool.onrender.com/api/v1';

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async (token) => {
    // const token = localStorage.getItem('authToken');    
    try{
        const response = await axios.get(`${API_URL}/reservations`, {
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    }
    catch(error){
        console.log(error);
    }
});

export const createReservation = createAsyncThunk('reservations/createReservation', async (user_id, course_id, city, date) => {
    const token = localStorage.getItem('authToken');    
    try{
        await fetch(`${API_URL}/reservations`, {
            method: 'POST',
            body: JSON.stringify(
                    user_id,
                    course_id,
                    city,
                    date,
            ),
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
          });

        } 
    catch (error) {
            console.log(error);
        }
});

const reservationsSlice = createSlice({
    name: 'reservations',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchReservations.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchReservations.fulfilled, (state, action) => {
            state.loading = false;
            state.reservations = action.payload;
        });
        builder.addCase(fetchReservations.rejected, (state, action) => {
            state.loading = false;
            state.reservations = [];
            state.error = action.payload;
        });
    },
});

export default reservationsSlice.reducer;