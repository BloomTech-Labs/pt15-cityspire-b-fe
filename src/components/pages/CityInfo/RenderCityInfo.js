import React, { useState } from 'react';
import { Layout, Card } from 'antd';
import CityCard from './CityCard';
import Title from 'antd/lib/typography/Title';
import MapContainer from '../Home/Map';
const mapboxgl = require('mapbox-gl');

const { Meta } = Card;
const { Header } = Layout;

function RenderCityInfo(props) {
  const { city } = props;

  return (
    <div>
      <Layout>
        <div>
          <Header style={{ backgroundColor: '#491a55' }}>
            <Title style={{ color: 'white' }} level={3}>
              CitySpire
            </Title>
          </Header>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {city.map(city => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </Layout>
    </div>
  );
}

export default RenderCityInfo;
