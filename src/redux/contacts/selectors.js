import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectIsContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectIsError = (state) => state.contacts.error;

 export const selectFilteredContacts = createSelector(
[ selectIsContacts, selectFilter],
 (contacts, filter) => {
   return Array.isArray(contacts) && contacts.filter(contact => contact.name.toLowerCase()
    .includes(filter.toLowerCase()))
 }
)
