/**
 * Action types
 */
export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_UP_REQUEST = '@auth/SIGN_UP_REQUEST',
  SIGN_FAILURE = '@auth/SIGN_FAILURE',
  SIGN_OUT = '@auth/SIGN_OUT',
}

/**
 * Data types
 */
export interface Login {
  username: string;
  password: string;
}

/**
 * State Type
 */
export interface AuthState {
  readonly token: string;
  readonly signed: boolean;
  readonly loading: boolean;
}
