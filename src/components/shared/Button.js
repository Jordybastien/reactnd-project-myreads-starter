import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ isOpen, clearSearch }) => {
  const [linkToUse, classToUse] = isOpen
    ? ["/search", "open-search"]
    : ["/", "close-search"];
  return <Link to={linkToUse} className={classToUse} onClick={clearSearch}></Link>;
};
Button.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  clearSearch: PropTypes.func
};
export default Button;
