import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import characters from './characters';
import episodes from './episodes';

export default combineReducers({
  characters,
  episodes,
  toastr: toastrReducer,
});
