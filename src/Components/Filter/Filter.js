import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Filter extends Component {
  handleFilter = ({ target }) => {
    const { value } = target;

    this.props.filterValue(value);
  };

  render() {
    return (
      <input
        placeholder="Find contact"
        value={this.props.value}
        onChange={this.handleFilter}
      />
    );
  }
}

Filter.propTypes = {
  filterValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
