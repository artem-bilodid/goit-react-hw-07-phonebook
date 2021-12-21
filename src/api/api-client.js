import API_CONST from './api-const';
const { BASE_URL, CONTACTS_ENDPOINT } = API_CONST;

export const getContacts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${CONTACTS_ENDPOINT}`);
    if (!response.ok) throw new Error(response.statusText);
    const contacts = await response.json();
    return contacts;
  } catch (error) {
    throw new Error(error);
  }
};

export const addContact = async (name, number) => {
  try {
    const response = await fetch(`${BASE_URL}/${CONTACTS_ENDPOINT}`, {
      method: 'POST',
      body: JSON.stringify({ name, number }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(response.statusText);
    const newContact = await response.json();
    return newContact;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteContact = async id => {
  try {
    const response = await fetch(`${BASE_URL}/${CONTACTS_ENDPOINT}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(response.statusText);
    const deletedContact = await response.json();
    return deletedContact;
  } catch (error) {
    throw new Error(error);
  }
};
