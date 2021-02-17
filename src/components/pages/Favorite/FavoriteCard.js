import React from 'react';

const FavoriteCard = props => {
  return (
    <div key={props.favorite.id}>
      <h2>City: {}</h2>
      <h4>State: {}</h4>
      <h4>Zip: {}</h4>
    </div>
  );
};

export default FavoriteCard;
