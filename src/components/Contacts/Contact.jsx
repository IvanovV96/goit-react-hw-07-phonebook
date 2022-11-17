import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/slice';
import { ContactEl } from './Contacts.styled';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeContact(id));
  };
  return (
    <ContactEl key={id}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={handleClick} id={id}>
        Delete
      </button>
    </ContactEl>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
