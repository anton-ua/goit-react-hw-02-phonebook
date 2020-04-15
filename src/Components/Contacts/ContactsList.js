import React, { Component } from "react";
import Contact from "../Contact/Contact";
import Filter from "../Filter/Filter";
import PropTypes from "prop-types";

export default class ContactsList extends Component {
  state = { filter: "" };

  filterContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  filterValue = (input) => {
    this.setState(() => ({ filter: input }));
  };

  render() {
    const { contacts, deleteContact } = this.props;
    const { filter } = this.state;

    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <>
        <h2>Contacts</h2>
        {contacts.length > 2 && (
          <Filter value={filter} filterValue={this.filterValue} />
        )}
        <ul>
          {filteredContacts.map(({ name, number, id }) => (
            <Contact
              key={id}
              name={name}
              number={number}
              id={id}
              deleteContact={() => deleteContact(id)}
            />
          ))}
        </ul>
      </>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
