import { getFilter } from '../filter/filter-selector';
import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getLoading = state => state.contacts.isLoading;
export const getInvalidated = state => state.contacts.isInvalidated;

export const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) =>
  contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())),
);
