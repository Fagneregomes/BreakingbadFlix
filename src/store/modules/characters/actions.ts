import { action } from 'typesafe-actions';

import { CharacterTypes, Character } from './types';

export const characterRequest = (search: string) =>
  action(CharacterTypes.CHARACTERS_REQUEST, { search });

export const characterSuccess = (character: Character) =>
  action(CharacterTypes.CHARACTERS_SUCCESS, character);

export const characterFailure = () => action(CharacterTypes.CHARACTERS_FAILURE);
