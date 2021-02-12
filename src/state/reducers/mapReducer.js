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
};

export default function mapReducer(state = init, action) {
  switch (action.type) {
    default:
      return state;
  }
}
