import * as ActionTypes from "./actionTypes";

// DEFAULT STATE
const defaultState = {
  isLoading: null,
  isLogin:null,
};

// const [count, setCount] = React.useState(0)

const accountReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SAVING_MY_PROFILE:
      return { ...state, profile: action.payload };

    case ActionTypes.GET_MY_PROFILE:
      return { ...state, isLoading: true };

    case ActionTypes.GET_MY_PROFILE_SUCCESS:
      return { ...state, profile: action.payload, isLoading: false };

    case ActionTypes.GET_MY_PROFILE_FAILED:
      return { ...state, isLoading: false };

    case ActionTypes.LOGIN:
      return { ...state, isLoading: true };
    
      case ActionTypes.LOGOUT:
      return { ...state, profile:null, isLoading: false, isLogin:false };

    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, profile:action.payload, isLoading: false,isLogin:true };

    case ActionTypes.LOGIN_FAILED:
      return { ...state, isLoading: false,isLogin:false};
    default:
      return state;
  }
};

export default accountReducer;

// Notes:
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
