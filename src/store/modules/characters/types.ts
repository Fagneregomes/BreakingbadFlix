/**
 * Action types
 */
export enum CharacterTypes {
  CHARACTERS_REQUEST = '@Character/CHARACTERS_REQUEST',
  CHARACTERS_SUCCESS = '@Character/CHARACTERS_SUCCESS',
  CHARACTERS_FAILURE = '@Character/CHARACTERS_FAILURE',
}

/**
 * Data types
 */
export interface Character {
  char_id: number;
  name: string;
  birthday: Date;
  occupation: string[];
  img: string;
  status: string;
  nickname: string;
  appearance: number[];
  portrayed: string;
  category: string;
  better_call_saul_appearance: [];
}

/**
 * State Type
 */
export interface CharacterState {
  readonly data: Character[];
  readonly loading: boolean;
  readonly error: boolean;
}
