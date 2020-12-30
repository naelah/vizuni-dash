import { ADD_CAWANGAN, REMOVE_CAWANGAN, CLEAR_CAWANGAN } from './actionTypes';

export const addCawanganFilter = (id) => ({
  type: ADD_CAWANGAN,
  id,
});

export const removeCawanganFilter = (id) => ({
  type: REMOVE_CAWANGAN,
  id,
});

export const clearCawanganFilter = () => ({
  type: CLEAR_CAWANGAN,
});
