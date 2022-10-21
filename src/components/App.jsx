import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Wrap } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsFromLS = localStorage.getItem('contacts');
    if (contactsFromLS) {
      return JSON.parse(contactsFromLS);
    }
  });
  const [filter, setFilter] = useState('');

  const filterContact = e => {
    setFilter(e.currentTarget.value);
  };

  const onFiltredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    return setContacts(contacts.filter(contact => contact.id !== id));
  };

  const addContact = name => {
    contacts.find(
      contact => contact.name.toLowerCase() === name.name.toLowerCase()
    )
      ? alert(`${name.name} is already in contacts`)
      : setContacts([name, ...contacts]);
  };

  const handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    addContact(values);
    resetForm();
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Wrap>
      <Section title={`Phonebook`}></Section>
      <ContactForm handleSubmit={handleSubmit} />
      <Section title={`Contacts`}>
        <Filter filter={filter} filterContact={filterContact} />
        <ContactsList
          contacts={onFiltredContacts}
          onDeleteContact={onDeleteContact}
        />
      </Section>
    </Wrap>
  );
}
