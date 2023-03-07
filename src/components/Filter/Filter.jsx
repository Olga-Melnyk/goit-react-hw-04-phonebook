import PropTypes from 'prop-types';

import { FilterText, FilterInput } from './Filter.styled';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <div>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput type="text" value={value} onChange={onFilterChange} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilterChange: PropTypes.func,
};
