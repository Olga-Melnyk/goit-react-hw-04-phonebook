import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';

import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func,
};
