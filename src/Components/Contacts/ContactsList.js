import React, { Fragment } from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";

const ContactsList = ({ contacts, deleteContact, children }) => (
  <Fragment>
    <h2>Contacts</h2>
    {children}
    <ul>
      {contacts.map(({ name, number, id }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={() => deleteContact(id)}
        />
      ))}
    </ul>
  </Fragment>
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default ContactsList;
