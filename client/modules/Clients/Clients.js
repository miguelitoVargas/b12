import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
import styles from './Clients.css';

class Clients extends Component {
  render() {
    return (
      <div>
        CLIENT!!!
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

Clients.propTypes = {
};

export default connect(
  mapStateToProps,
)(Clients);
