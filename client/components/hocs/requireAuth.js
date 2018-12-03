import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Loading from 'react-loading-components';
import styles from './requireAuth.css';

export default (ChildComponent) => {
  function Auth() {
    return (
      <div className={styles.authcontainer}>
        <p>Please click <Link to="/"> HERE</Link> to continue!!</p>
      </div>
    )
  }
  class RequireAuth extends PureComponent {
    render() {
      switch (this.props.currentUser) {
        case false:
          return (<Auth />);
        case null:
          return (<Loading type="oval" width={200} height={200} />);
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps({ app: { currentUser } }) {
    return { currentUser };
  }

  RequireAuth.propTypes = {
    auth: PropTypes.bool,
  };

  return connect(mapStateToProps)(RequireAuth);
};
