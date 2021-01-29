import React, { useEffect, useState } from 'react';
import { mapboxConfig } from '../../../utils/mapboxConfig';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = mapboxConfig.token;

const MapContainer = ({ setMap }) => {
  const [mapContainer, setMapContainer] = useState(undefined);

  useEffect(() => {
    if (mapContainer) {
      const tempMap = new mapboxgl.Map({
        container: mapContainer,
        lat: mapboxConfig.lat,
        lng: mapboxConfig.lng,
        zoom: mapboxConfig.zoom,
        style: mapboxConfig.style,
      });
      setMap(tempMap);
    }
  }, [mapContainer, setMap]);
  return (
    <div
      style={{
        zIndex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
      }}
      ref={el => setMapContainer(el)}
    ></div>
  );
};

export default MapContainer;
