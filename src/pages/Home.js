import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Container} from 'react-bootstrap';

import {getMovies} from '../actions/movies';
import './styles.css';
import Card from '../components/Card';

const App = ({getMovies, list, favorites}) => {
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Container>
      <div className="container">
        {list.map((card) => <Card key={card.id} {...card}
                                  isFavorite={favorites.indexOf(card.id) >= 0}/>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
