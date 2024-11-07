export const selectIsContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
 export const selectIsError = (state) => state.contacts.error;
export const selectFilter = (state) => state.filter.name;
