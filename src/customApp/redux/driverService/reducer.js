import actionType from './actionType';

const initState = {
  loading: false,
  error: undefined,
  getResult: undefined,
  insertResult: undefined,
  cancelResult: undefined,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actionType.GET_SERVICE_ORDER:
      return {
        ...state,
        loading: true,
        error: undefined
      };
    case actionType.RECEIVE_SERVICE_ORDER:
      return {
        ...state,
        loading: false,
        error: action.error,
        getResult: action.payload
      };
    case actionType.INSERT_SERVICE_ORDER:
      return {
        ...state,
        loading: true,
        error: undefined
      };
    case actionType.RECEIVE_INSERT_SERVICE_ORDER:
      return {
        ...state,
        loading: false,
        error: undefined,
        insertResult: action.payload,
      };
    case actionType.CANCEL_SERVICE_ORDER:
      return {
        ...state,
        loading: true,
        error: undefined
      };
    case actionType.RECEIVE_CANCEL_SERVICE_ORDER:
      return {
        ...state,
        loading: false,
        error: undefined,
        cancelResult: action.payload,
      };
    default:
      return state;
  }
}
