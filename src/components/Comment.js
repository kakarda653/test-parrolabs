import React from 'react';
import {Card} from 'react-bootstrap';
import './styles.css';

const Comment = ({title, description}) => {
  return (<Card className="comment-card">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
  </Card>);
};


export default Comment;
