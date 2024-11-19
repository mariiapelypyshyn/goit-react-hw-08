import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
  async (_, thunkApi) => {
       const state = thunkApi.getState();
    const token = state.auth.token;
    axios.defaults.headers.common['Authorization'] = token;
        try {
            const {data} = await axios.get("/contacts");
            console.log('data: ', data);
            
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
     }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (finalUser, thunkApi) => {
        try {
      const {data} = await axios.post("/contacts",  finalUser );
      console.log('data: ', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
     async (contactId, thunkApi) => {
    try {
      const {data} = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);