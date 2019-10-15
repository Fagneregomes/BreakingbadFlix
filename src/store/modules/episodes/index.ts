import { Reducer } from 'redux';
import { EpisodesState, EpisodesTypes } from './types';

const INITIAL_STATE: EpisodesState = {
  data: [],
  error: false,
  loading: false,
};

const episodes: Reducer<EpisodesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EpisodesTypes.EPISODES_REQUEST:
      return { ...state, data: [], loading: true };

    case EpisodesTypes.EPISODES_SUCCESS:
      return { data: [...action.payload], loading: false, error: false };

    case EpisodesTypes.EPISODES_FAILURE:
      return { ...state, error: true, loading: false };

    default:
      return state;
  }
};

export default episodes;
