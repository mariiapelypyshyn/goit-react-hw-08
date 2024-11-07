import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://672a143b976a834dd0220bc2.mockapi.io';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("/contacts");
            console.log('response: ', response);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
     }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (finalUser, thunkApi) => {
        try {
      const response = await axios.post("/contacts",  finalUser );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
     async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);