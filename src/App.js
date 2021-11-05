import React, { Component } from 'react';
import ContactInput from './components/ContactInput';
import ContactsList from './components/ContactsList/ContactsList';
import ShortId from 'shortid';
import Filter from './components/ContactFilter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerContact = ({ name, number }) => {
    const { contacts } = this.state;

    const newContact = {
      id: ShortId.generate(),
      name: name,
      number: number,
    };
    if (
      contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()) ||
      contacts.find(contact => contact.number === newContact.number)
    ) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  contactFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const { filter } = this.state;

    const filteredNumbers = this.contactFilter();

    return (
      <div className="main_container">
        <h1 className="title">Phonebook</h1>

        <ContactInput onSubmit={this.handlerContact} />

        <h2 className="title">Contacts</h2>

        <Filter onChange={this.changeFilter} value={filter} />

        <ContactsList contacts={filteredNumbers} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
