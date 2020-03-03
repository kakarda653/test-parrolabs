import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Button, Card} from 'react-bootstrap';

import {getMovies, addToFavorite} from '../actions/movies';
import './styles.css';

const App = ({id, image, title, description, isFavorite, addToFavorite}) => {
  useEffect(() => {
    getMovies();
  }, []);
  const handleAddMovieToFavorites = () => {
    addToFavorite(id);
  };
  return (<Card className="movie-card">
    <Card.Img variant="top" src={image}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Button onClick={handleAddMovieToFavorites}
              variant="primary">{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</Button> :
    </Card.Body>
  </Card>);
};

const mapDispatchToProps = dispatch => ({
  addToFavorite: (id) => dispatch(addToFavorite(id))
});

export default connect(null, mapDispatchToProps)(App);
