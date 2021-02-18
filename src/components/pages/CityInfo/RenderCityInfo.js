import React from 'react';
import { Layout, Card } from 'antd';
import Title from 'antd/lib/typography/Title';
import MapContainer from '../Home/Map';
const mapboxgl = require('mapbox-gl');

const { Meta } = Card;
const { Header } = Layout;
const city = {
  cityName: 'Baltimore',
  cityState: 'MD',
  cityCrime: 99,
  cityWalkability: 87,
  cityRentMean: 1200,
  citySaleMean: 350000,
  cityImgUrl: 'http://cityimgurl.jpg',
};

const tabList = [
  {
    key: 'crime',
    tab: 'crime',
  },
  {
    key: 'walkability',
    tab: 'walkability',
  },
  {
    key: 'rent',
    tab: 'rent',
  },
  {
    key: 'sale',
    tab: 'sale',
  },
];

function RenderCityInfo(props, city) {
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
        <div>
          <Card style={{ width: 500 }} title={city.cityName}>
            {city.cityName}
          </Card>
        </div>
      </Layout>
    </div>
  );
}

export default RenderCityInfo;
