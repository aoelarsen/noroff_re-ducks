import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import ClearSearch from "./ClearSearch";

const Search = ({ handleSearch, inputValue, clearInput }) => {
  return (
    <InputGroup className="Search">
      <FormControl
        placeholder="Search by name..."
        onChange={event => handleSearch(event)}
        value={inputValue}
      />
      <InputGroup.Append>
        <ClearSearch inputValue={inputValue} clearInput={clearInput} />
      </InputGroup.Append>
    </InputGroup>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  clearInput: PropTypes.func.isRequired
};

export default Search;
