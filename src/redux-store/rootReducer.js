import { combineReducers } from 'redux';

import accountReducer from './account/reducer';
// import bankReducer from './BankApp/reducers';
// import userReducer from './UsersApp/reducers';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  accountReducer
  // bankReducer,
  // userReducer, // Ngăn chứa vật phẩm khác
});

export default rootReducer;