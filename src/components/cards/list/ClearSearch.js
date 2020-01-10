import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function ClearSearch({ inputValue, clearInput }) {
  if (inputValue) {
    return (
      <Button variant="outline-primary" onClick={() => clearInput()}>
        Clear search
      </Button>
    );
  }

  return (
    <Button variant="outline-secondary" disabled>
      Clear Search
    </Button>
  );
}

ClearSearch.propTypes = {
  inputValue: PropTypes.string.isRequired,
  clearInput: PropTypes.func.isRequired
};

export default ClearSearch;
