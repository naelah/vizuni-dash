import { FILTER_FACULTY, CLEAR_FILTER_FACULTY } from './actionTypes';

const INIT_STATE = Object.freeze({
  facultySelected: [],
});

const FacultyFilter = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FILTER_FACULTY:
      return {
        ...state,
        facultySelected: action.payload,
      };
    case CLEAR_FILTER_FACULTY:
    default:
      return state;
  }
};

export default FacultyFilter;
