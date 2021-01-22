import { CHANGE_PARAMS, CLEAR_PARAMS } from './actionTypes';

const initialState = Object.freeze({
  ST101: 1,
  ST102: 1,
  ST103: 1,
  ST204: 1,
  ST205: 1,
  ST206: 1,
  ST307: 1,
  ST308: 1,
  ST309: 1,
});

const ParamsFilter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PARAMS:
      return { ...state, ...action.payload };
    case CLEAR_PARAMS:
      return initialState;
    default:
      return state;
  }
};

export default ParamsFilter;
