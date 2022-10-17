import { Label, FindInput } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, filterContact }) => {
  return (
    <Label>
      Find contacts by name
      <FindInput
        type="text"
        name="filter"
        value={filter}
        onChange={filterContact}
      />
    </Label>
  );
};

Label.propTypes = {
  filter: PropTypes.string,
};
