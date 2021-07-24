import { api } from '../api';

export const getCharacters = async () => {
  const characters = await api.get('/character');
  return characters.data.results;
};
