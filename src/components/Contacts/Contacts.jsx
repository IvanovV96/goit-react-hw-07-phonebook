import { useSelector } from 'react-redux/es/exports';
import { getFilterValue } from 'redux/filter/slice';
import { selectContacts } from 'redux/selectors';
import { Contact } from './Contact';
import { ContactsEl } from './Contacts.styled';

export const ContactsList = () => {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(selectContacts);
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ContactsEl>
      {filteredContacts.map(contact => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </ContactsEl>
  );
};
