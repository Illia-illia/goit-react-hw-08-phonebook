import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const getContactsLS = localStorage.getItem('contacts');

const checkLS = () => {
  if (getContactsLS) {
    return JSON.parse(getContactsLS);
  }
};

const initialState = checkLS();

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: '',
    redusers: {
      addstring()
  },
});

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

export const { update } = contactsSlice.actions;
