import actionType from './actionType';

export const getServiceOrder = (booking_id) => ({
        type: actionType.GET_SERVICE_ORDER,
        payload: { booking_id }
    });

export const receiveServiceOrder = (listServiceOrder, error) => ({
    type: actionType.RECEIVE_SERVICE_ORDER,
    payload: listServiceOrder,
    error: error
});

export const insertServiceOrder = (booking_id, service_id, service_order_datetime) => ({
    type: actionType.INSERT_SERVICE_ORDER,
    payload: {booking_id, service_id, service_order_datetime},
});

export const receiveInsertServiceOrder = (resultInsertServiceOrder, error) => ({
    type: actionType.RECEIVE_INSERT_SERVICE_ORDER,
    payload: resultInsertServiceOrder,
    error: error
});

export const cancelServiceOrder = (idServiceOrder) => ({
    type: actionType.CANCEL_SERVICE_ORDER,
    payload: {idServiceOrder},
});

export const receiveCancelServiceOrder = (resultCancelServiceOrder, error) => ({
    type: actionType.RECEIVE_CANCEL_SERVICE_ORDER,
    payload: resultCancelServiceOrder,
    error: error
});