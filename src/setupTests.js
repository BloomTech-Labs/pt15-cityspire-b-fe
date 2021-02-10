// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'jest-prop-type-error';
import 'jest-canvas-mock';
import mapboxClient from '@mapbox/mapbox-sdk';
const mapboxGeocode = require('@mapbox/mapbox-sdk/services/geocoding');

jest.mock('mapbox-gl');
jest.mock('@mapbox/mapbox-sdk');
mapboxClient.mockResolvedValue({ mockClient: true });
jest.mock('@mapbox/mapbox-sdk/services/geocoding');
mapboxGeocode.mockResolvedValue({
  mockClient: true,
  reverseGeoCode: obj => {
    return new Promise((resolve, reject) => {
      resolve({ features: [{ city: 'someplace', state: 'wa' }] });
      reject({
        error: 'this is an error',
      });
    });
  },
});

window.URL.createObjectURL = function() {};
window.matchMedia = function() {
  return { addListener: jest.fn(), removeListener: jest.fn() };
};
