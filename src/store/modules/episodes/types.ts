/**
 * Action types
 */
export enum EpisodesTypes {
  EPISODES_REQUEST = '@Epsodes/EPISODES_REQUEST',
  EPISODES_SUCCESS = '@Epsodes/EPISODES_SUCCESS',
  EPISODES_FAILURE = '@Epsodes/EPISODES_FAILURE',
}

/**
 * Data types
 */
export interface Episodes {
  episode_id: number;
  title: string;
  season: number;
  air_date: Date;
  characters: string[];
  episode: string;
  series: string;
}

/**
 * State Type
 */
export interface EpisodesState {
  readonly data: Episodes[];
  readonly loading: boolean;
  readonly error: boolean;
}
