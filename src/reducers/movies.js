import {GET_MOVIES, SET_FAVORITE_MOVIE} from '../actions/types';

const initialState = {
  list: [],
  favorites: []
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
      console.log({newFavorites});
      return {
        ...state,
        favorites: newFavorites
      };
    case GET_MOVIES:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
