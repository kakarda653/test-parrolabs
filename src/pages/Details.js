import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

import './styles.css';
import {getMovie} from '../actions/movies';
import Comment from "../components/Comment";

const Details = ({getMovie, selectedMovie, favorites}) => {

  const {id} = useParams();

  useEffect(() => {
    getMovie(id);
  }, [getMovie, id]);

  const {title, image, longDescription, loading, reviews = []} = selectedMovie;
  const isFavorite = favorites.indexOf(id) >= 0;

  return (
    <Container>
      {loading ? 'Movie is loading' :
        <>
          <Row>
            <Col><Card>
              <Card.Img variant="top" src={image}/>
              <Card.Body>
                <Card.Title>{title} {isFavorite && '(Favorite)'}</Card.Title>
              </Card.Body>
            </Card></Col>
            <Col>{longDescription}</Col>
          </Row>
          <Row>
            <Col>
              <h3>Reviews:</h3>
              <div className="container-custom">
                {reviews.map((review) => <Comment
                  key={review.id} title={review.userName} description={review.text}/>)}
              </div>
            </Col>
          </Row>
        </>}
    </Container>
  );
};


const mapStateToProps = ({movies}) => {
  return ({
    ...movies
  });
};

const mapDispatchToProps = dispatch => ({
  getMovie: (id) => dispatch(getMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
