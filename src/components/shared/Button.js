import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ isOpen }) => {
  const [linkToUse, classToUse] = isOpen
    ? ["/search", "open-search"]
    : ["/", "close-search"];
  return <Link to={linkToUse} className={classToUse}></Link>;
};
Button.propTypes = {
  isOpen: PropTypes.bool.isRequired
};
export default Button;
