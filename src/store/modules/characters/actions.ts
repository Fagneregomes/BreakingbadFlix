import { action } from 'typesafe-actions';

import { CharacterTypes, Character } from './types';

export const characterRequest = (search: string, limit: number, offset: number) =>
  action(CharacterTypes.CHARACTERS_REQUEST, { search, limit, offset });

export const characterSuccess = (character: Character, totalPage: number) =>
  action(CharacterTypes.CHARACTERS_SUCCESS, { character, totalPage });

export const characterFailure = () => action(CharacterTypes.CHARACTERS_FAILURE);
