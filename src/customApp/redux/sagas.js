import { all } from 'redux-saga/effects';
import githubSearchSagas from './githubSearch/sagas';
import bookingSaga from './booking/saga';
import driverServicesSaga from './driverService/saga';

export default function* devSaga() {
  yield all([
    githubSearchSagas(),
    bookingSaga(),
    driverServicesSaga()
  ]);
}
