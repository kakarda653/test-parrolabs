import React from 'react';
import {Button} from 'react-bootstrap';

import './styles.css';

const FavoriteButton = ({onClick, isFavorite}) => {
  return (
    <div className="button-container">
      <Button onClick={onClick}
              variant="primary">{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</Button>
    </div>
  );
};

export default FavoriteButton;
