import React, { useState } from 'react';
import RenderCityInfo from './RenderCityInfo';

const initialState = [
  {
    City: 'Houston',
    CostOfLivingIndex: 95.8,
    Density: 981.0,
    Latitude: '29.5585',
    Longitude: '-95.3215',
    MonthlyRents: {
      '2020-01-01': '1503.0',
      '2020-02-01': '1505.0',
      '2020-03-01': '1505.0',
      '2020-04-01': '1502.0',
      '2020-05-01': '1501.0',
      '2020-06-01': '1500.0',
      '2020-07-01': '1499.0',
      '2020-08-01': '1498.0',
      '2020-09-01': '1499.0',
      '2020-10-01': '1499.0',
      '2020-11-01': '1500.0',
      '2020-12-01': '1500.0',
      '2021-01-01': '1504.0',
      '2021-02-01': '1504.0',
      '2021-03-01': '1503.0',
      '2021-04-01': '1501.0',
      '2021-05-01': '1500.0',
      '2021-06-01': '1498.0',
      '2021-07-01': '1497.0',
      '2021-08-01': '1497.0',
      '2021-09-01': '1497.0',
      '2021-10-01': '1498.0',
      '2021-11-01': '1499.0',
      '2021-12-01': '1499.0',
    },
    Population: 122460,
    PropertyCrimeRate: 101750.0,
    State: 'TX',
    ViolentCrimeRate: 25257.0,
    WalkScore: 46,
    WalkScoreDescription: 'Car-Dependent',
    ZIPcode: '77584',
  },
  {
    ZIPcode: '21203',
    City: 'Baltimore',
    State: 'MD',
    Latitude: '39.2904',
    Longitude: '76.6122',
    Population: 2106068,
    Density: 2830,
    WalkScore: 0,
    WalkScoreDescription: 'Car-Dependent',
    ViolentCrimeRate: 0.11101,
    PropertyCrimeRate: 0.25748,
    MonthlyRents: null,
    CostOfLivingIndex: 107,
  },
];

function CityInfoContainer() {
  const [city, setCity] = useState(initialState);

  return (
    <>
      <RenderCityInfo city={city} />
    </>
  );
}

export default CityInfoContainer;
