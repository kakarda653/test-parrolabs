import React, {useEffect, useMemo, useState} from 'react';
import {connect} from 'react-redux';
import {Container} from 'react-bootstrap';

import {getMovies} from '../actions/movies';
import './styles.css';
import Card from '../components/Card';

const Favorites = ({getMovies, list, favorites}) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  useMemo(() => {
    const favoriteMovies = list.filter(movie => favorites.indexOf(movie.id) >= 0);
    setMovies(favoriteMovies);
  }, [list, favorites]);
  return (
    <Container>
      <div className="container">
        {movies.length > 0 ? movies.map((card) => <Card key={card.id} {...card}
                                                        isFavorite/>) :
          <h2>You don't have favorites movies selected yet!</h2>}
      </div>
    </Container>
  );
};


const mapStateToProps = ({movies}) => ({
  ...movies
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
