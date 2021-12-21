import * as API from '../../api/api-client';
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

export const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    const contacts = await API.getContacts();
    dispatch(getContactsSuccess(contacts));
  } catch (error) {
    dispatch(getContactsError());
  }
};

export const addContact = (name, number) => async dispatch => {
  dispatch(addContactRequest());
  try {
    await API.addContact(name, number);
    dispatch(addContactSuccess());
  } catch (error) {
    dispatch(addContactError());
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await API.deleteContact(id);
    dispatch(deleteContactSuccess());
  } catch (error) {
    dispatch(deleteContactError());
  }
};
