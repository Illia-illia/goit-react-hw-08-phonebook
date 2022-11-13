import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const getContactsLS = localStorage.getItem('contacts');

const checkLS = () => {
  if (getContactsLS) {
    return JSON.parse(getContactsLS);
  } else {
    return [];
  }
};

const initialState = checkLS();
console.log(initialState);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    update: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

export const { update } = contactsSlice.actions;
