import { action } from 'typesafe-actions';

import { EpisodesTypes, Episodes } from './types';

export const episodesRequest = (search: string) =>
  action(EpisodesTypes.EPISODES_REQUEST, { search });

export const episodesSuccess = (episodes: Episodes) =>
  action(EpisodesTypes.EPISODES_SUCCESS, episodes);

export const episodesFailure = () => action(EpisodesTypes.EPISODES_FAILURE);
