import React, { useState } from 'react';
import { Card } from 'antd';

function CityCard(props) {
  const { city } = props;
  const [tab, setTab] = useState('general');

  const tabChange = key => {
    setTab(key);
  };
  const tabList = [
    {
      key: 'general',
      tab: 'general',
    },
    {
      key: 'living',
      tab: 'living',
    },
    {
      key: 'crime',
      tab: 'crime',
    },
  ];
  const contentList = {
    general: (
      <div>
        <h1>{city.State}</h1>
        <p>Population: {city.Population}</p>
        <p>Density: {city.Density}</p>
        <p>ZIP code: {city.ZIPcode}</p>
      </div>
    ),
    living: (
      <div>
        <p>Cost of Living Index: {city.CostOfLivingIndex}</p>
        <p>Walkability Score: {city.WalkScore}</p>
        <p>Walkability: {city.WalkScoreDescription}</p>
      </div>
    ),
    crime: (
      <div>
        <p>Property Crime: {city.PropertyCrimeRate}</p>
        <p>Violent Crime: {city.ViolentCrimeRate}</p>
      </div>
    ),
  };

  return (
    <div>
      <Card
        style={{ width: 500 }}
        title={city.City}
        tabList={tabList}
        activeTabKey={tab}
        onTabChange={tab => {
          tabChange(tab);
        }}
      >
        {contentList[tab]}
      </Card>
    </div>
  );
}
export default CityCard;
