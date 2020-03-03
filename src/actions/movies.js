import mockDataMovies from './mockDataMovies';
import { GET_MOVIES, SET_FAVORITE_MOVIE } from './types'

export const getMovies = () => async dispatch => {
  const result = await getMoviesFake()
  dispatch({
    type: GET_MOVIES,
    payload: result
  });
};

const getMoviesFake = async () => await new Promise((resolve, reject) => {
  setTimeout(() => {
    // success fake request
    resolve(mockDataMovies);
  }, 1000);
});

export const addToFavorite = (id) => dispatch => {
  dispatch({
    type: SET_FAVORITE_MOVIE,
    payload: id
  });
};
