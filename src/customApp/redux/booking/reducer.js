import actionType from './actionType';

const initState = {
  loading: false,
  error: undefined,
  getResult: undefined,
  editResult: undefined,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actionType.GET_BOOKING:
      return {
        ...state,
        loading: true,
        error: undefined
      };
    case actionType.RECEIVE_GET_BOOKING:
      return {
        ...state,
        loading: false,
        error: action.error,
        getResult: action.payload
      };
    case actionType.EDIT_BOOKING:
      return {
        ...state,
        loading: true,
        error: undefined
      };
    case actionType.RECEIVE_EDIT_BOOKING:
      return {
        ...state,
        loading: false,
        error: undefined,
        getResult: action.payload,
        editResult: action.payload,
      };
    default:
      return state;
  }
}
