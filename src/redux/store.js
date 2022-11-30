import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
    filter: filterReducer,
  },
});
