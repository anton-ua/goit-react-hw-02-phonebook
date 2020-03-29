import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

const InitialState = { name: "", number: "" };

export default class AddContact extends Component {
  state = { ...InitialState };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.name) {
      return;
    }

    if (!this.state.number) {
      return;
    }

    this.props.onAddContact({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({ ...InitialState });
  };

  render() {
    return (
      <Fragment>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Enter phone number"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
      </Fragment>
    );
  }
}

AddContact.propTypes = {
  onAddContact: PropTypes.func.isRequired
};
