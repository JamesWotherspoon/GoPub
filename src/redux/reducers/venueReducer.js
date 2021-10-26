import ActionTypes from '../constants/actionTypes';

const initialState = {
  venues: [],
};
export default function venueReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.SET_VENUES:
      return { ...state, venues: payload };
    default:
      return state;
  }
}
