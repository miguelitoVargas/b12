import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import requireAuth from '../../components/hocs/requireAuth';
import moment from 'moment';
import { getCustomers } from './ClientsReducer';
import { fetchCustomers } from './ClientsActions';
import { Table } from 'antd';
const columns = [
  {
    title: 'DATE',
    dataIndex: 'dateAdded',
    defaultSortOrder: 'descend',
    render: text => <p>{moment(text).format('YYYY-MM-DD')}</p>,
  }, {
    title: 'CLIENT',
    dataIndex: 'name',
    render: (name, record) => <a href={`/client_detail/${record._id}`}>{name}</a>,
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  }, {
    title: 'AGE',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  }, {
    title: 'GENDER',
    dataIndex: 'gender',
    filterMultiple: false,
  },
  {
    title: 'NOTES',
    dataIndex: 'notes',
    filterMultiple: false,
  }];
// Import Style
import styles from './Clients.css';

class Clients extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCustomers());
  }
  onChange = (pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter);
  }
  render() {
    return (
      <div>
        <span>
          <h3 className={styles['clients-total']}>CLIENTS</h3><small>{this.props.customers.length} TOTAL</small>
        </span>
        <Table
          rowKey={record => record._id}
          columns={columns}
          dataSource={this.props.customers}
          onChange={this.onChange}
          expandedRowRender={record => <p style={{ margin: 0 }}>Phone Number: {record.phone}</p>}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: getCustomers(state),
    auth: state.app.currentUser,
  };
}

Clients.propTypes = {
};

export default requireAuth(connect(
  mapStateToProps,
)(Clients));
