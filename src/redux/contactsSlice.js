import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'zTp - gwjqQ - ysGGsOyaDR3', name: 'Gerry', number: '888 - 78 - 58' },
    { id: 'yWlsirdGRaN4wjP3mbK1N', name: 'Serg', number: '788 - 52 - 14' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add(state, action) {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    deleted(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { add, deleted } = contactsSlice.actions;
