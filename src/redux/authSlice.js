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

export const logOut = createAsyncThunk('log_out', async () => {
  const authToken = localStorage.getItem('authToken');
  try {
    await fetch(`${API_URL}/logout`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });
    localStorage.removeItem('authToken');
    return {};
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: {},
    loading: false,
    isAuth: false
  },
  reducers: {    
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => { 
      state.loading = false;
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.auth = action.payload;
      state.loading = false;
      state.isAuth = true;
    },
  }
});

export const { startLoading, stopLoading } = authSlice.actions;

export default authSlice.reducer;
