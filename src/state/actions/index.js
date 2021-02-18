// import all of your actions into this file, and export them back out.
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Declare action TYPES at the top of the file

// TYPES
import {
  REVERSE_GEOCODE,
  INITIALIZE_MAP,
  START_MOVE,
  STOP_MOVE,
} from './mapActions';

// ACTIONS
import { reverseGeocode, initializeMap } from './mapActions';

export const types = {
  REVERSE_GEOCODE,
  INITIALIZE_MAP,
  START_MOVE,
  STOP_MOVE,
};

export const actions = {
  reverseGeocode,
  initializeMap,
};
