import PropTypes from 'prop-types';

import { Input } from './style';

export const SearchBar = ({ searchedCharacters, setSearchedCharacters }) => {
  return (
    <Input
      type="text"
      value={searchedCharacters}
      onChange={({ target }) => setSearchedCharacters(target.value)}
    />
  );
};

SearchBar.propTypes = {
  searchedCharacters: PropTypes.array,
  setSearchedCharacters: PropTypes.func,
}.isRequired;
