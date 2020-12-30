import uniq from 'lodash/uniq';
import { ADD_FACULTY, REMOVE_FACULTY, CLEAR_FACULTY } from './actionTypes';

const initialState = Object.freeze({
  selectedFaculty: [],
});

const FacultyFilter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FACULTY:
      return {
        selectedFaculty: uniq([...state.selectedFaculty, action.id]),
      };
    case REMOVE_FACULTY:
      return {
        selectedFaculty: [...state.selectedFaculty].filter(
          (item) => item !== action.id
        ),
      };
    case CLEAR_FACULTY:
      return initialState;
    default:
      return state;
  }
};

export default FacultyFilter;
