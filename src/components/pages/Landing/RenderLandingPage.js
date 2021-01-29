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
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (map && geocoder) {
      map.addControl(geocoder);
      map.on('move', () => {
        const lat = map.getCenter().lat.toFixed(4);
        const lng = map.getCenter().lng.toFixed(4);

        geocodeService
          .reverseGeocode({
            query: [parseFloat(lng), parseFloat(lat)],
            types: ['place', 'postcode'],
          })
          .send()
          .then(res => {
            const features = res.body.features;
            if (features.length > 0) {
              console.log(features);
              const [city, state, country] = features[1].place_name.split(',');
              const zipcode = parseInt(features[0].text);
              setCoords({ ...coords, city, state, zipcode });
            }
            // if (res.body.features.length > 0) {
            //   const
            //
            // }
          })
          .catch(err => {
            console.log(err);
          });

        setCoords({
          lat,
          lng,
        });
      });
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
        <h1>Welcome to Labs Basic SPA</h1>
        <div>
          <p>
            This is an example of how we'd like for you to approach
            page/routable components.
          </p>
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
