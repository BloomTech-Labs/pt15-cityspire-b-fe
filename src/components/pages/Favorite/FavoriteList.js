import React, { useEffect } from 'react';
import FavoriteCard from './FavoriteCard';
import { connect } from 'react-redux';
import { fetchFavorites } from '../../../state/actions/index';

const FavoriteList = props => {
  useEffect(() => {
    props.fetchFavorites();
  }, []);

  return (
    <div>
      {props.favorite.map(favorite => (
        <FavoriteCard favorite={favorite} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchFavorites })(FavoriteList);
