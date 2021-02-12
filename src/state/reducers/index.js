// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

import { combineReducers } from 'redux';
import mapReducer from './mapReducer';
import profileReducer from './profileReducer';

const root = combineReducers({
  map: mapReducer,
  profile: profileReducer,
});

export default root;
