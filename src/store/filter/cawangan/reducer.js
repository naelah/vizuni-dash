import uniq from 'lodash/uniq';
import { ADD_CAWANGAN, REMOVE_CAWANGAN, CLEAR_CAWANGAN } from './actionTypes';

const initialState = Object.freeze({
  selectedCawangan: [],
});

const CawanganFilter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAWANGAN:
      return {
        selectedCawangan: uniq([...state.selectedCawangan, action.id]),
      };
    case REMOVE_CAWANGAN:
      return {
        selectedCawangan: [...state.selectedCawangan].filter(
          (item) => item !== action.id
        ),
      };
    case CLEAR_CAWANGAN:
      return initialState;
    default:
      return state;
  }
};

export default CawanganFilter;
