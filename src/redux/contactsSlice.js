import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.contacts.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      ),
  // {
  //   [fetchContacts.pending]: handlePending,
  // [fetchContacts.fulfilled](state, action) {
  //   state.contacts.isLoading = false;
  //   state.contacts.error = null;
  //   state.contacts.items = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.pending]: handlePending,
  // [addContact.fulfilled](state, action) {
  //   state.contacts.isLoading = false;
  //   state.contacts.error = null;
  //   state.contacts.items.push(action.payload);
  // },
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.pending]: handlePending,
  // [deleteContact.fulfilled](state, action) {
  //   state.contacts.isLoading = false;
  //   state.contacts.error = null;
  //   const index = state.contacts.items.findIndex(
  //     contact => contact.id === action.payload.id
  //   );
  //     state.contacts.items.splice(index, 1);
  //   },
  //   [deleteContact.rejected]: handleRejected,
  // },
});

export const contactsReducer = contactSlice.reducer;
