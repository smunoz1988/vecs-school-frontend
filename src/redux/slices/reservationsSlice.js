import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    reservations: [],
    error: '',
};

const API_URL = 'http://127.0.0.1:3000/api/v1';
const token = localStorage.getItem('token');

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
    try{
        const response = await axios.get(`${API_URL}/reservations`, {
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

export const createReservation = createAsyncThunk('reservations/createReservation', async (user_id, course_id, city, date) => {
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
                'Authorization': token,
            },
          });

        } 
    catch (error) {
            console.log(error);
        }
});

export const deleteReservation = createAsyncThunk('reservations/deleteReservation', async (id) => {
    try{
        await fetch(`${API_URL}/reservations/${id}`, {
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