import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

export const Card = ({ character }) => {
  return (
    <Container>
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
      <p>{character.species}</p>
    </Container>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
}.isRequired;
