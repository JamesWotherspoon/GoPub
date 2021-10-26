import { combineReducers } from 'redux';
import venues from './venueReducer';
import venueQueries from './venueQueriesReducer';

const reducers = combineReducers({
  venues,
  venueQueries,
});

export default reducers;
