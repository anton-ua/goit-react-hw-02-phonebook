import React from "react";
import PropTypes from "prop-types";

const Contact = ({ name, number, deleteContact }) => (
  <li>
    <p>
      {name}: <span>{number}</span>
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
    </p>
  </li>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default Contact;
