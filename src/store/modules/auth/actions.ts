import { action } from 'typesafe-actions';

import { AuthTypes, Login } from './types';

export const signInRequest = (login: Login) => action(AuthTypes.SIGN_IN_REQUEST, { login });

export const signInSuccess = (token: string) => action(AuthTypes.SIGN_IN_SUCCESS, { token });

export const signFailure = () => action(AuthTypes.SIGN_FAILURE);

export const signOut = () => action(AuthTypes.SIGN_OUT);
