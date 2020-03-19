import React from "react";
import PropTypes from "prop-types";

const Select = ({ selectedOption, onChange }) => {
  return (
    <div className="book-shelf-changer">
      <select value={selectedOption} onChange={onChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

Select.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Select;
