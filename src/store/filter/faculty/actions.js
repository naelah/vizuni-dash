import { ADD_FACULTY, REMOVE_FACULTY, CLEAR_FACULTY } from './actionTypes';

export const addFacultyFilter = (id) => ({
  type: ADD_FACULTY,
  id,
});

export const removeFacultyFilter = (id) => ({
  type: REMOVE_FACULTY,
  id,
});

export const clearFacultyFilter = () => ({
  type: CLEAR_FACULTY,
});
