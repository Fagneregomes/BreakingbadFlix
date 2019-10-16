import { Reducer } from 'redux';
import { CharacterState, CharacterTypes } from './types';

const INITIAL_STATE: CharacterState = {
  data: [],
  error: false,
  loading: false,
  totalPage: 0,
};

const character: Reducer<CharacterState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharacterTypes.CHARACTERS_REQUEST:
      return { ...state, data: [], loading: true };

    case CharacterTypes.CHARACTERS_SUCCESS:
      return {
        data: [...action.payload.character],
        totalPage: action.payload.totalPage,
        loading: false,
        error: false,
      };

    case CharacterTypes.CHARACTERS_FAILURE:
      return { ...state, error: true, loading: false };

    default:
      return state;
  }
};

export default character;
