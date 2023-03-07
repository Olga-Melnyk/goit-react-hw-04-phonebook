import PropTypes from 'prop-types';

import { Item, Span, Button } from './ContactListItem.styled';

export const ContactListItem = ({
  contact: { name, number, id },
  onDeleteContact,
}) => {
  return (
    <Item>
      <Span>
        {name}: <Span>{number}</Span>
      </Span>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func,
};
