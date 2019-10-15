import { all } from 'redux-saga/effects';

import character from './characters/sagas';

export default function* rootSaga() {
  return yield all([character]);
}
