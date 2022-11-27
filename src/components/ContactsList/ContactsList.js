import { List, Item, Button } from './ContactsList.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { deleted } from '../../redux/contactsSlice';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            {/* <Button type="button" onClick={() => dispatch(deleted(id))}>
              Delete
            </Button> */}
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
      number: PropTypes.number.isRequired,
    })
  ),
};
