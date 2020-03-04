import mockDataMovies from './mockDataMovies';
import {GET_MOVIES, SET_FAVORITE_MOVIE, GET_MOVIE, LOADING_MOVIE} from './types';

export const getMovies = () => async dispatch => {
  const result = await getFakeMovies();
  dispatch({
    type: GET_MOVIES,
    payload: result
  });
};

const getFakeMovies = async () => await new Promise((resolve, reject) => {
  setTimeout(() => {
    // success fake request
    resolve(mockDataMovies);
  }, 100);
});

export const getMovie = (id) => async dispatch => {
  dispatch({
    type: LOADING_MOVIE
  });
  const result = await getFakeMovie(id);
  const resultReviews = await getFakeMovieReviews(id);
  dispatch({
    type: GET_MOVIE,
    payload: {...result, reviews: resultReviews}
  });
};

const getFakeMovie = async (id) => await new Promise((resolve, reject) => {
  setTimeout(() => {
    // success fake request
    const movie = mockDataMovies.filter(movie => movie.id === id)[0];
    if (movie) {
      const {id, title, longDescription, image} = movie;
      resolve({id, title, longDescription, image});
    } else {
      reject({error: 'Current movie is not found'});
    }
  }, 100);
});

const getFakeMovieReviews = async (id) => await new Promise((resolve, reject) => {
  setTimeout(() => {
    // success fake request
    const movie = mockDataMovies.filter(movie => movie.id === id)[0];
    if (movie) {
      resolve(movie.reviews);
    } else {
      reject({error: 'Current movie is not found'});
    }
  }, 100);
});

export const addToFavorite = (id) => dispatch => {
  dispatch({
    type: SET_FAVORITE_MOVIE,
    payload: id
  });
};
