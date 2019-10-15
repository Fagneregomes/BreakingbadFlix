import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import characters from './characters';

export default combineReducers({
  characters,
  toastr: toastrReducer,
});
