export const selectContacts = state => state.phonebook.contacts.items;
export const selectisLoading = state => state.phonebook.contacts.isLoading;
export const selectError = state => state.phonebook.contacts.error;
export const selectFilter = state => state.filter;
