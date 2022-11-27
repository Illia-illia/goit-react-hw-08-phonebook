import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  FetchContactsReducer,
  AddContactReducer,
  DeleteContactReducer,
  anyFulfilledReducer,
  anyPendingReducer,
  anyRejectedReducer,
} from './reducers';

const actions = [fetchContacts, addContact, deleteContact];

const getActions = type => actions.map(action => action[type]);

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
      .addCase(fetchContacts.fulfilled, FetchContactsReducer)
      .addCase(addContact.fulfilled, AddContactReducer)
      .addCase(deleteContact.fulfilled, DeleteContactReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), anyFulfilledReducer)
      .addMatcher(isAnyOf(...getActions('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectedReducer),
});

export const contactsReducer = contactSlice.reducer;
