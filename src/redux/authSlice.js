import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://127.0.0.1:3000';


export const fetchUser = createAsyncThunk('current_user', async () => {
  const authToken = localStorage.getItem('authToken');
  if (authToken) {
    const response = await fetch(`${API_URL}/api/v1/current_user`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });

    const data = await response.json();
    return data;
  } else {
    return {};
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: {},
    loading: false,
  },
  reducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.auth = action.payload;
      state.loading = false;
    },
    setAuth: (state, action) => {
      state.auth = action.payload;
      state.loading = false;
    },
    clearAuth: (state) => {
      state.auth = {};
      state.loading = false;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => { 
      state.loading = false;
    },
  },
});

export const { setAuth, clearAuth, startLoading, stopLoading } = authSlice.actions;

export default authSlice.reducer;
