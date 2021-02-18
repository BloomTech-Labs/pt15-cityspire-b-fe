import { mapboxConfig } from '../../utils/mapboxConfig';

// Geocoding modules
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import axios from 'axios';

// Reverse Geocoding modules
const mapboxClient = require('@mapbox/mapbox-sdk');
const mapboxGeocode = require('@mapbox/mapbox-sdk/services/geocoding');
const baseClient = mapboxClient({ accessToken: mapboxConfig.token });
const geocodeService = mapboxGeocode(baseClient);

// Actions
export const REVERSE_GEOCODE = 'REVERSE_GEOCODE';
export const INITIALIZE_MAP = 'INITIALIZE_MAP';
export const START_MOVE = 'START_MOVE';
export const STOP_MOVE = 'STOP_MOVE';

/**
 * Converts Latitude and Longitude into City/State and Zip
 *
 * @param {Array} coordinates [lat, lng]
 */
export const reverseGeocode = coordinates => dispatch => {
  const [lat, lng] = coordinates;
  axios
    .get(
      `https://labspt15-cityspire-b.herokuapp.com/geocode/reverse?lat=${lat}&lng=${lng}`
    )
    .then(res => {
      console.log(res);
      const features = res.data.features;
      if (features.length === 2) {
        const [city, state] = features[1].place_name.split(',');
        const zipcode = parseInt(features[0].text);

        dispatch({
          type: REVERSE_GEOCODE,
          payload: {
            city,
            state,
            zipcode,
          },
        });
      } else if (features.length === 1) {
        const [city, state] = features[0].place_name.split(',');

        dispatch({
          type: REVERSE_GEOCODE,
          coords: {
            city,
            state,
          },
        });
      }
    })
    .catch(err => {});
};

/**
 * Creates a mapboxgl object and attaches it to a JSX Component
 *
 * @param {Object} mapboxgl a mapboxgl module
 * @param {JSXComponent} container reference to a JSX Component that the map will attach itself to
 */
export const initializeMap = (mapboxgl, container) => dispatch => {
  mapboxgl.accessToken = mapboxConfig.token;
  const map = new mapboxgl.Map({
    container: container,
    center: [mapboxConfig.lng, mapboxConfig.lat],
    pitch: 0.1,
    zoom: mapboxConfig.zoom,
    style: mapboxConfig.style,
  });
  const geocoder = new MapboxGeocoder({
    mapboxgl: map,
    container: container,
    accessToken: mapboxConfig.token,
  });
  map.on('load', () => {
    map.resize();
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
