import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Button, Card} from 'react-bootstrap';
import {useHistory} from "react-router-dom";

import {getMovies, addToFavorite} from '../actions/movies';
import FavoriteButton from './FavoriteButton';
import './styles.css';

const CardComponent = ({id, image, title, description, isFavorite, addToFavorite}) => {
  useEffect(() => {
    getMovies();
  }, []);
  const handleAddMovieToFavorites = () => {
    addToFavorite(id);
  };
  const history = useHistory();

  const handleViewMovie = () => {
    history.push(`/details/${id}`);
  };
  return (<Card className="movie-card">
    <Card.Img variant="top" src={image}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <FavoriteButton onClick={handleAddMovieToFavorites} isFavorite={isFavorite}/>
      <Button onClick={handleViewMovie}>View</Button>
    </Card.Body>
  </Card>);
};

const mapDispatchToProps = dispatch => ({
  addToFavorite: (id) => dispatch(addToFavorite(id))
});

export default connect(null, mapDispatchToProps)(CardComponent);
