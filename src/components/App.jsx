import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (values, actions) => {
    let newContact = values;
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      newContact.id = nanoid();

      setContacts(contacts => [...contacts, newContact]);

      actions.resetForm({
        name: '',
        number: '',
      });
    }
  };

  const onFilterChange = e => {
    return setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    return setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const filtredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onFilterChange={onFilterChange} />
      {filter.length === 0 ? (
        <ContactList contacts={contacts} onDeleteContact={deleteContact} />
      ) : (
        <ContactList
          contacts={filtredContacts()}
          onDeleteContact={deleteContact}
        />
      )}
      <GlobalStyle />
    </div>
  );
};
