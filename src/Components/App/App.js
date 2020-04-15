import React, { Component } from "react";
import styles from "./App.module.css";
import { v4 as uuidv4 } from "uuid";
import AddContact from "../AddContact/AddContact";
import ContactsList from "../Contacts/ContactsList";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  addContact = (contact) => {
    const id = uuidv4();
    const contactToAdd = { ...contact, id };

    if (
      this.state.contacts
        .map(({ name }) => name.toLowerCase())
        .includes(contact.name.toLowerCase())
    ) {
      alert(`${contact.name} is already in contact`);
    } else {
      this.setState((state) => ({
        contacts: [...state.contacts, contactToAdd],
      }));
    }
  };

  deleteContact = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className={styles.container}>
        <AddContact onAddContact={this.addContact} />
        {contacts.length > 0 && (
          <ContactsList
            contacts={contacts}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
