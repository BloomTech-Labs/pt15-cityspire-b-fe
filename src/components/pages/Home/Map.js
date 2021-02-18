import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../state/actions';
import { mapboxConfig } from '../../../utils/mapboxConfig';
import './geocoder.css';

const MapContainer = ({ mapboxgl }) => {
  const [mapContainer, setMapContainer] = useState(undefined);

  const dispatch = useDispatch();

  useEffect(() => {
    if (mapContainer) {
      dispatch(actions.initializeMap(mapboxgl, mapContainer, mapboxConfig));
    }
  }, [mapContainer, mapboxgl, dispatch]);
  return (
    <div
      style={{
        zIndex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}
      ref={el => setMapContainer(el)}
    ></div>
  );
};

export default MapContainer;
