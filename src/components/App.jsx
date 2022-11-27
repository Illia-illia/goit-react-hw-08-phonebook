import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Wrap } from './App.styled';
import { nanoid } from 'nanoid';
//
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';
//

export default function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const onFiltredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // const addContact = name => {
  //   contacts.find(
  //     contact => contact.name.toLowerCase() === name.name.toLowerCase()
  //   )
  //     ? alert(`${name.name} is already in contacts`)
  //     : dispatch(add(name));
  // };

  const handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    // addContact(values);
    resetForm();
  };

  return (
    <Wrap>
      <Section title={`Phonebook`}></Section>
      <ContactForm handleSubmit={handleSubmit} />
      <Section title={`Contacts`}>
        <Filter />
        {/* <ContactsList contacts={onFiltredContacts} /> */}
      </Section>
      <div>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      </div>
    </Wrap>
  );
}
