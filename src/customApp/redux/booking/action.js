import actionType from './actionType';

export const getBooking = (codeBooking) => ({
        type: actionType.GET_BOOKING,
        payload: { codeBooking }
    });

export const receiveBooking = (bookingResult, error) => ({
    type: actionType.RECEIVE_GET_BOOKING,
    payload: bookingResult,
    error: error
});

export const editBooking = (codeBooking, arrivalTime) => ({
    type: actionType.EDIT_BOOKING,
    payload: {codeBooking, arrivalTime},
});

export const receiveEditBooking = (bookingResult, error) => ({
    type: actionType.RECEIVE_EDIT_BOOKING,
    payload: bookingResult,
    error: error
});