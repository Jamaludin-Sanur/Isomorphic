import { all, takeLatest, put, call } from 'redux-saga/effects';
import actionType from './actionType'
import { receiveServiceOrder, receiveInsertServiceOrder, receiveCancelServiceOrder } from './action';
import { getServiceOrder, insertServiceOrder, cancelServiceOrder } from '../../api/ServiceOrder';

function* _getServiceOrder({payload}){
    try{
        // do api call
        const result = yield call(getServiceOrder, payload.booking_id);
        yield put(receiveServiceOrder(result));
    }catch(err){
        yield put(receiveServiceOrder(undefined, err));
    }
}

function* _insertServiceOrder({payload}){
    try{
        // do api call
        console.log("sagaaaax", payload);
        const insertResult = yield call(insertServiceOrder, payload);
        yield put(receiveInsertServiceOrder(insertResult));
    }catch(err){
        yield put(receiveInsertServiceOrder(undefined, err));
    }
}

function* _cancelServiceOrder({payload}){
    try{
        // do api call
        const cancelResult = yield call(cancelServiceOrder, payload.idServiceOrder);
        yield put(receiveCancelServiceOrder(cancelResult));
    }catch(err){
        yield put(receiveCancelServiceOrder(undefined, err));
    }
}

export default function* rootSaga(){
    yield all([
        takeLatest(actionType.GET_SERVICE_ORDER, _getServiceOrder),
        takeLatest(actionType.INSERT_SERVICE_ORDER, _insertServiceOrder),
        takeLatest(actionType.CANCEL_SERVICE_ORDER, _cancelServiceOrder),
    ]);
}