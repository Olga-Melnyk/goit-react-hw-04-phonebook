import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { GlobalStyle } from './GlobalStyles';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
      return;
    }
    this.setState({ contacts: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (values, actions) => {
    let newContact = values;

    if (this.state.contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      newContact.id = nanoid();

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));

      actions.resetForm({
        name: '',
        number: '',
      });
    }
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filtredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook1</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
        {this.state.filter.length === 0 ? (
          <ContactList
            contacts={this.state.contacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <ContactList
            contacts={this.filtredContacts()}
            onDeleteContact={this.deleteContact}
          />
        )}
        <GlobalStyle />
      </div>
    );
  }
}
