import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { mapboxConfig } from '../../../utils/mapboxConfig';
import GeoCoderContainer from '../Home/Geocoder';
import MapContainer from '../Home/Map';

const mapboxClient = require('@mapbox/mapbox-sdk');
const mapboxGeocode = require('@mapbox/mapbox-sdk/services/geocoding');
const baseClient = mapboxClient({ accessToken: mapboxConfig.token });
const geocodeService = mapboxGeocode(baseClient);

function RenderLandingPage(props) {
  const history = useHistory();

  const [map, setMap] = useState(undefined);
  const [geocoder, setGeocoder] = useState(undefined);
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0,
    city: '',
    state: '',
    zip: '',
  });
  let isMoving = 0;
  const mapOnMove = () => {
    const lat = map.getCenter().lat.toFixed(4);
    const lng = map.getCenter().lng.toFixed(4);
    isMoving++;
    setTimeout(() => {
      isMoving--;
      if (isMoving === 0) {
        geocodeService
          .reverseGeocode({
            query: [parseFloat(lng), parseFloat(lat)],
            types: ['place', 'postcode'],
          })
          .send()
          .then(res => {
            const features = res.body.features;
            if (features.length === 2) {
              const [city, state] = features[1].place_name.split(',');
              const zipcode = parseInt(features[0].text);

              setCoords({ ...coords, city, state, zipcode });
            } else if (features.length === 1) {
              const [city, state] = features[0].place_name.split(',');

              setCoords({ ...coords, city, state });
            }
          })
          .catch(err => {});
      }
    }, 1000);

    setCoords({
      ...coords,
      lat,
      lng,
    });
  };
  useEffect(() => {
    if (map && geocoder) {
      map.addControl(geocoder);
      map.on('move', mapOnMove);
    }
  }, [map, geocoder]);

  const loginHandler = () => {
    history.push('/login');
  };

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '50%',
          left: '50%',
          marginLeft: '-25%',
          zIndex: 2,
          backgroundColor: 'rgba(255,255,255,.25)',
          textAlign: 'center',
          marginBottom: '10%',
        }}
      >
        <h1>City Spire</h1>
        <div>
          {coords.city !== '' && (
            <div>
              <p>You are looking at:</p>
              <p>
                {coords.city}, {coords.state} {coords.zipcode}
              </p>
            </div>
          )}
          <p>
            <Link to="/example-list">Example List of Items</Link>
          </p>
        </div>
        <button onClick={loginHandler}>Login</button>
      </div>
      <div>
        <GeoCoderContainer setGeocoder={setGeocoder} />
        <MapContainer setMap={setMap} />
      </div>
    </div>
  );
}
export default RenderLandingPage;
