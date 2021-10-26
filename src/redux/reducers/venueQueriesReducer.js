import ActionTypes from '../constants/actionTypes';

const initialState = {
  location: 'locatin_test',
};
export default function venueQueries(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.SET_SEARCH_QUERIES:
      return { ...state, venueQueries: payload };
    default:
      return state;
  }
}
