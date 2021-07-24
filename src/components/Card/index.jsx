import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from './style';

export const Card = ({ character }) => {
  return (
    <Container>
      <img src={character.image} alt={character.name} />
      <Text>{character.name}</Text>
      <Text>{character.species}</Text>
      <Text>{character.location.name}</Text>
    </Container>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
}.isRequired;
