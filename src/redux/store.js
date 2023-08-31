import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import coursesReducer from "./slices/coursesSlice";
import reservationsReducer from "./slices/reservationsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    reservations: reservationsReducer
  },
});

export default store;
