import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './App.module.scss';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { contactsSelectors, contactsOperations } from './../../redux/contacts';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const isInvalidated = useSelector(contactsSelectors.getInvalidated);

  useEffect(() => {
    if (isInvalidated) {
      dispatch(contactsOperations.getContacts());
    }
  }, [isInvalidated, dispatch]);

  const handleDeleteContact = event => {
    const { id } = event.target;
    dispatch(contactsOperations.deleteContact(id));
  };

  const handleAddContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in the contacts`);
      return;
    }
    dispatch(contactsOperations.addContact(name, number));
  };

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <Filter />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ContactList contacts={filteredContacts} handleDelete={handleDeleteContact} />
      )}
    </div>
  );
};

export default App;
