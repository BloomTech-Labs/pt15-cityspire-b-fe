import axios from 'axios';

export const FETCH_FAVORITE_DATA = 'FETCH_FAVORITE_DATA';
export const FETCH_FAVORITE_SUCCESS = 'FETCH_FAVORITE_SUCCESS';
export const FETCH_FAVORITE_FAIL = 'FETCH_FAVORITE_FAIL';

export const fetchFavorites = () => dispatch => {
  dispatch({ type: FETCH_FAVORITE_DATA });
  const token = JSON.parse(localStorage['okta-token-storage']);
  const profileId = token.idToken.claims.sub;
  axios
    .get(`https://labspt15-cityspire-b.herokuapp.com/favorites/${profileId}`)
    .then(res => {
      console.log('get request', res.data);
      dispatch({ type: FETCH_FAVORITE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('error', err);
      dispatch({ type: FETCH_FAVORITE_FAIL, payload: err });
    });
};

export const POST_FAVORITE_DATA = 'POST_FAVORITE_DATA';
export const POST_FAVORITE_SUCCESS = 'POST_FAVORITE_SUCCESS';
export const POST_FAVORITE_FAIL = 'POST_FAVORITE_FAIL';

export const postFavorites = coords => dispatch => {
  dispatch({ type: POST_FAVORITE_DATA });
  const token = JSON.parse(localStorage['okta-token-storage']);
  const profileId = token.idToken.claims.sub;
  axios
    .post(
      `https://labspt15-cityspire-b.herokuapp.com/favorites/${profileId}`,
      coords
    )
    .then(res => {
      console.log('Post Success?', res.data);
      dispatch({ type: POST_FAVORITE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('error', err);
      dispatch({ type: POST_FAVORITE_FAIL, payload: err });
    });
};
