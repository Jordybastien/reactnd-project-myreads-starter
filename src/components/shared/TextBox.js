import React from "react";
import PropTypes from "prop-types";

const TextBox = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />;
};

TextBox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};
export default TextBox;
