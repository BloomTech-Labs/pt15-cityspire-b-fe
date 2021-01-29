import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import GeoCoderContainer from '../Home/Geocoder';
import MapContainer from '../Home/Map';

function RenderLandingPage(props) {
  const history = useHistory();

  const [map, setMap] = useState(undefined);
  const [geocoder, setGeocoder] = useState(undefined);

  useEffect(() => {
    if (map && geocoder) {
      map.addControl(geocoder);
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
