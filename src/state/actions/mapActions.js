import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import { mapboxConfig } from '../../utils/mapboxConfig';

export const REVERSE_GEOCODE = 'REVERSE_GEOCODE';
export const INITIALIZE_MAP = 'INITIALIZE_MAP';
export const START_MOVE = 'START_MOVE';
export const STOP_MOVE = 'STOP_MOVE';

export const reverseGeocode = ([lat, lng]) => dispatch => {};

export const initializeMap = (mapboxgl, container) => dispatch => {
  mapboxgl.accessToken = mapboxConfig.token;
  const map = new mapboxgl.Map({
    container: container,
    lat: mapboxConfig.lat,
    lng: mapboxConfig.lng,
    zoom: mapboxConfig.zoom,
    style: mapboxConfig.style,
  });
  const geocoder = new MapboxGeocoder({
    container: container,
    accessToken: mapboxConfig.token,
  });
  map.addControl(geocoder);
  map.on('move', () => {
    const lat = map.getCenter().lat.toFixed(4);
    const lng = map.getCenter().lng.toFixed(4);
    dispatch({
      type: START_MOVE,
      payload: [lat, lng],
    });
    setTimeout(() => {
      dispatch({
        type: STOP_MOVE,
      });
    }, 1000);
  });
  dispatch({
    type: INITIALIZE_MAP,
    payload: map,
  });
};
