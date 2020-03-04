import {GET_MOVIE, GET_MOVIES, SET_FAVORITE_MOVIE, LOADING_MOVIE} from '../actions/types';

const initialState = {
  list: [],
  favorites: [],
  selectedMovie: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE_MOVIE:
      const favoriteIndex = state.favorites.indexOf(action.payload);
      const newFavorites = [...state.favorites];
      if (favoriteIndex === -1) {
        newFavorites.push(action.payload);
      } else {
        newFavorites.splice(favoriteIndex, 1);
      }
      return {
        ...state,
        favorites: newFavorites
      };
    case GET_MOVIES:
      return {
        ...state,
        list: action.payload
      };
    case GET_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload
      };
    case LOADING_MOVIE:
      return {
        ...state,
        selectedMovie: {loading: true}
      };
    default:
      return state;
  }
}
