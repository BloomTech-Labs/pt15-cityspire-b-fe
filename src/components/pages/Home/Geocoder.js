import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import React, { useEffect, useState } from 'react';
import { mapboxConfig } from '../../../utils/mapboxConfig';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './geocoder.css';
const GeoCoderContainer = ({ setGeocoder }) => {
  const [container, setContainer] = useState(undefined);
  useEffect(() => {
    if (container) {
      const geocoder = new MapboxGeocoder({
        container: container,
        accessToken: mapboxConfig.token,
      });

      setGeocoder(geocoder);
    }
  }, [container, setGeocoder]);
  return (
    <div id="geocoder" className="geocoder" ref={el => setContainer(el)}></div>
  );
};

export default GeoCoderContainer;
