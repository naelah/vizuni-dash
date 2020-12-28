import {
  FILTER_FACULTY,
  FILTER_FACULTY_SUCCESS,
  CLEAR_FILTER_FACULTY,
  CLEAR_FILTER_FACULTY_SUCCESS,
} from './actionTypes';

export const filterFaculty = (faculty) => ({
  type: FILTER_FACULTY,
  payload: faculty,
});

export const filterFacultySuccess = (faculty) => ({
  type: FILTER_FACULTY_SUCCESS,
  payload: faculty,
});

export const clearFilterFaculty = (faculty) => ({
  type: CLEAR_FILTER_FACULTY,
  payload: faculty,
});

export const clearFilterFacultySuccess = (faculty) => ({
  type: CLEAR_FILTER_FACULTY_SUCCESS,
  payload: faculty,
});
