import React, { Component } from 'react';
import styles from './ClientDetailMain.css';
import { connect } from 'react-redux';
import BasicUserInfo from './pages/BasicUser/BasicUserInfo';
import AddShot from './pages/AddShot/AddShot';
import { getCustomer } from '../ClientsReducer';
import { fetchCustomers, fetchCustomer } from '../ClientsActions';

class ClientDetailMain extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCustomers());
    this.props.dispatch(fetchCustomer(this.props.params.id));
  }
  render() {
    return (
      <div className={styles.clientdetailmaincontainer}>
        <BasicUserInfo customer={this.props.customer} />
        <AddShot />
      </div>
    );
  }

}
function mapStateToProps(store, props) {
  return {
    customer: getCustomer(store, props.params.id),
  };
}
export default connect(mapStateToProps)(ClientDetailMain);
