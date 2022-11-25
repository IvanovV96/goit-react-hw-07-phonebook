import { ContactsList } from './Contacts/Contacts';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { selectContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';

const titles = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(selectContacts()));
  }, [dispatch]);

  return (
    <>
      <Section title={titles.form}>
        <PhonebookForm />
      </Section>
      <Section title={titles.contacts}>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};
