import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
export const ADD_CUSTOMER = 'ADD_CUSTOMER';

// Export Actions
export function addCustomers(customers) {
  return {
    type: ADD_CUSTOMERS,
    customers,
  };
}

export function fetchCustomers() {
  return (dispatch) => {
    return callApi('customers').then(res => {
      dispatch(addCustomers(res.customers));
    });
  };
}
export function addCustomer(customer) {
  return {
    type: ADD_CUSTOMER,
    customer,
  };
}
export function fetchCustomer(id) {
  return (dispatch) => {
    return callApi(`customer/${id}`).then(res => {
      dispatch(addCustomer(res.customer));
    });
  };
}
