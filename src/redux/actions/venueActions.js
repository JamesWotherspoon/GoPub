import ActionTypes from '../constants/actionTypes';

export function setSearchQueries(formData) {
  return {
    type: ActionTypes.SET_SEARCH_QUERIES,
    payload: formData,
  };
}

export function setVenues(venues) {
  return {
    type: ActionTypes.SET_VENUES,
    payload: venues,
  };
}

export function selectedVenue(venue) {
  return {
    type: ActionTypes.SELECTED_VENUE,
    payload: venue,
  };
}
