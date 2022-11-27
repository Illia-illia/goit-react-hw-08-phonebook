import { List, Item, Button } from './ContactsList.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            {name}: {phone}
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
    })
  ),
};
