import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Wrap } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLocaleStorage = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (contactsFromLocaleStorage) {
      this.setState({ contacts: contactsFromLocaleStorage });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = name => {
    this.setState(prevState =>
      prevState.contacts.find(
        state => state.name.toLowerCase() === name.name.toLowerCase()
      )
        ? alert(`${name.name} is already in contacts`)
        : {
            contacts: [name, ...prevState.contacts],
          }
    );
  };
  onDeleteContact = id => {
    return this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onFiltredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    this.addContact(values);
    resetForm();
  };

  render() {
    return (
      <Wrap>
        <Section title={`Phonebook`}></Section>
        <ContactForm handleSubmit={this.handleSubmit} />
        <Section title={`Contacts`}>
          <Filter filter={this.filter} filterContact={this.filterContact} />
          <ContactsList
            contacts={this.onFiltredContacts()}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>
      </Wrap>
    );
  }
}
