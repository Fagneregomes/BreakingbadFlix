import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  token: '',
  signed: false,
  loading: false,
};

const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return { ...state, loading: true, username: action.payload.username };

    case AuthTypes.SIGN_IN_SUCCESS:
      return { token: action.payload.token, signed: true, loading: false };

    case AuthTypes.SIGN_FAILURE:
      return { ...state, loading: false };

    case AuthTypes.SIGN_OUT:
      return { token: '', signed: false, loading: false };

    default:
      return state;
  }
};

export default auth;
