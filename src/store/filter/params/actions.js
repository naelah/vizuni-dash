import { CHANGE_PARAMS, CLEAR_PARAMS } from './actionTypes';

export const changeParams = (params) => ({
  type: CHANGE_PARAMS,
  payload: params,
});

export const clearParams = () => ({
  type: CLEAR_PARAMS,
});
