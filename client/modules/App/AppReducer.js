// Import Actions
import { SIGNIN_MSG, FETCH_CURRENT_USER } from './AppActions';

// Initial State
const initialState = {
  currentUser: null,
  signinmsg: '',
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.userInfo || false,
      };
    case SIGNIN_MSG:
      return {
        ...state,
        signinmsg: (action.payload),
      };
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Export Reducer
export default AppReducer;
