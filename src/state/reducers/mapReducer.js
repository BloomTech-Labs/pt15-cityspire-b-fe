import { types } from '../actions';

const init = {
  coords: {
    city: '',
    state: '',
    zip: 0,
    lat: 0,
    lng: 0,
  },
  map: undefined,
  geocoder: undefined,
  isMoving: true,
  movementCoords: [[]],
};

export default function mapReducer(state = init, action) {
  switch (action.type) {
    case types.INITIALIZE_MAP:
      return {
        ...state,
        map: action.payload,
      };
    case types.REVERSE_GEOCODE:
      return {
        ...state,
        coords: { ...init.coords, ...action.payload },
      };
    case types.START_MOVE:
      return {
        ...state,
        isMoving: true,
        movementCoords: [...state.movementCoords, [...action.payload]],
      };
    case types.STOP_MOVE:
      return {
        ...state,
        isMoving: state.movementCoords.length > 2,
        movementCoords: state.movementCoords.slice(
          1,
          state.movementCoords.length
        ),
      };
    default:
      return state;
  }
}
