// Import Actions
import { ADD_CUSTOMERS, ADD_CUSTOMER } from './ClientsActions';

// Initial State
const initialState = {
  data: [],
};

const ClientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER :
      return {
        ...state,
        customer: action.customer,
      };
    case ADD_CUSTOMERS :
      return {
        ...state,
        data: action.customers,
      };
    default:
      return state;
  }
};

export default ClientsReducer;
// Get travel by id
export const getCustomer = (state, id) => state.customers.data.filter(client => client._id === id)[0];

// Get all customers
export const getCustomers = state => state.customers.data;
