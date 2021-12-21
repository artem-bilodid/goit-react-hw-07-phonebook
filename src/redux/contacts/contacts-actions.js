import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction('contacts/get/request');
export const getContactsSuccess = createAction('contacts/get/success');
export const getContactsError = createAction('contacts/get/error');

export const addContactRequest = createAction('contacts/add/request');
export const addContactSuccess = createAction('contacts/add/success');
export const addContactError = createAction('contacts/add/error');

export const deleteContactRequest = createAction('contacts/delete/request');
export const deleteContactSuccess = createAction('contacts/delete/success');
export const deleteContactError = createAction('contacts/delete/error');
