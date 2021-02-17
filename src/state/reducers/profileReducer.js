import {
  FETCH_FAVORITE_DATA,
  FETCH_FAVORITE_SUCCESS,
  FETCH_FAVORITE_FAIL,
  POST_FAVORITE_DATA,
  POST_FAVORITE_SUCCESS,
  POST_FAVORITE_FAIL,
} from '../actions/profileActions';

const init = {
  email: '',
  favorites: [],
  isFetching: false,
  isPosting: false,
  errors: '',
};

export default function profileReducer(state = init, action) {
  switch (action.type) {
    case FETCH_FAVORITE_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_FAVORITE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        favorites: action.payload,
      };
    case FETCH_FAVORITE_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case POST_FAVORITE_DATA:
      return {
        ...state,
        isPosting: true,
        favorites: [...state.favorites],
      };
    case POST_FAVORITE_SUCCESS:
      return {
        ...state,
        isPosting: false,
        favorites: action.payload,
      };
    case POST_FAVORITE_FAIL:
      return {
        ...state,
        isPosting: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
