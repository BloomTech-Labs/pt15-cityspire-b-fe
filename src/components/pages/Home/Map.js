import React, { useEffect, useState } from 'react';
import { mapboxConfig } from '../../../utils/mapboxConfig';

const MapContainer = ({ mapboxgl, setMap }) => {
  const [mapContainer, setMapContainer] = useState(undefined);

  useEffect(() => {
    if (mapContainer) {
      mapboxgl.accessToken = mapboxConfig.token;
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
        top: '5%',
        bottom: 0,
        width: '100%',
      }}
      ref={el => setMapContainer(el)}
    ></div>
  );
};

export default MapContainer;
