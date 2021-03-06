import { combineReducers } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication
import Login from './auth/login/reducer';
import Account from './auth/register/reducer';
import ForgetPassword from './auth/forgetpwd/reducer';
import Profile from './auth/profile/reducer';
import Faculty from './filter/faculty/reducer';
import Cawangan from './filter/cawangan/reducer';
import Params from './filter/params/reducer';

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  Faculty,
  Cawangan,
  Params,
});

export default rootReducer;
