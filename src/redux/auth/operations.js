import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
    "auth/register",
    async (formData, thunkApi) => {
        try {
           const { data } = await axios.post("/users/signup", formData);
          setToken(data.token);
       console.log('data: ', data);
         
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message || 'Unknown error');
        }
     }
);

export const login = createAsyncThunk(
    "auth/login",
    async (formData, thunkApi) => {
        try {
            const { data } = await axios.post("/users/login", formData);
          console.log('data: ', data);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message || 'Unknown error');
        }
     }
);
 
export const refreshUser = createAsyncThunk(
    "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) {
       return thunkApi.rejectWithValue("No token provider to refresh user data");
    }
    try {
      setToken(token);
            const { data } = await axios.get("/users/current");
          console.log('data: ', data);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message || 'Unknown error');
        }
     }
);

export const logout = createAsyncThunk(
    "auth/logout",
  async (_, thunkApi) => {
    try {
            const { data } = await axios.post("/users/logout");
      console.log('data: ', data);
      clearToken();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message || 'Unknown error');
        }
     }
);