import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

const items = createReducer(
  [],
  {
    [getContactsSuccess]: (state, { payload }) => payload,
  },
  // [getContactsSuccess]: (_, { payload }) => payload,
  // [deleteContactSuccess]: (state, { payload }) =>
  //   state.filter(contact => contact.id !== payload.id),
);

const isLoading = createReducer(true, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const isInvalidated = createReducer(true, {
  [getContactsSuccess]: () => false,
  [addContactSuccess]: () => true,
  [deleteContactSuccess]: () => true,
});

export const contacts = combineReducers({
  items,
  isLoading,
  isInvalidated,
});
