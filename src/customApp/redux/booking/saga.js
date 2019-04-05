import { all, takeLatest, put, call } from 'redux-saga/effects';
import actionType from './actionType'
import { receiveBooking, receiveEditBooking } from './action';
import { getBooking, editBooking } from '../../api/Booking';

function* getBookingData({payload}){
    try{
        // do api call
        const bookingResult = yield call(getBooking, payload.codeBooking);
        yield put(receiveBooking(bookingResult));
    }catch(err){
        yield put(receiveBooking(undefined, err));
    }
}

function* editBookingData({payload}){
    try{
        // do api call
        const editResult = yield call(editBooking, payload.codeBooking, payload.arrivalTime);
        yield put(receiveEditBooking(editResult));
    }catch(err){
        yield put(receiveEditBooking(undefined, err));
    }
}

export default function* rootSaga(){
    yield all([
        takeLatest(actionType.GET_BOOKING, getBookingData),
        takeLatest(actionType.EDIT_BOOKING, editBookingData),
    ]);
}