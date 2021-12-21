import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactSuccess,
  deleteContactSuccess,
} from './contacts-actions';

const items = createReducer([], {
  [getContactsSuccess]: (state, { payload }) => payload,
});

const isLoading = createReducer(true, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
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
