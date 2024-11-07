import { createSelector, createSlice } from '@reduxjs/toolkit'
import { fetchContacts } from './contactsOps';
import { addContact } from './contactsOps';
import { deleteContact } from './contactsOps';
import { selectIsContacts, selectFilter } from './selectors';


export const selectFilteredContacts = createSelector(
[ selectIsContacts, selectFilter],
 (contacts, filter) => {
   return Array.isArray(contacts) && contacts.filter(contact => contact.name.toLowerCase()
    .includes(filter.toLowerCase()))
 }
)

const INITIAL_STATE = {

    items:
        [],
     loading: false,
    error: null,
	
}
 const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
     extraReducers: (builder) => builder
         .addCase(fetchContacts.pending, state => {
             state.loading = true;
             state.error = null;
         })
         .addCase(fetchContacts.fulfilled, (state, action) => {
             state.loading = false;
             state.items = action.payload;
         })
      .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
             state.error = action.payload; 
      })
         
       .addCase(addContact.pending, state => {
        state.loading = true;
       })
     .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
     })
     .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
     })
         
     .addCase(deleteContact.pending, state => {
        state.loading = true;
     })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
         state.error = null;
          state.items = state.items.filter(item => item.id !== action.payload.id);
      })
     .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
     
})

export const contactsReducer = contactsSlice.reducer;