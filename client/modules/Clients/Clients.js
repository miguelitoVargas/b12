import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Clients.css';

class Clients extends Component {
  render() {
    return (
      <div> CLIENTS PAGE </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Clients.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients);
