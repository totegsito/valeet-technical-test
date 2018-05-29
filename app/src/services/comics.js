import client from './base';

export const getComicsById = comicId => client.get(`comics/${comicId}`);
export const getComicsByCharacterId = (characterId, offset) => client.get(`characters/${characterId}/comics`, { params: { offset } });

export default {
  getComicsById,
  getComicsByCharacterId,
};
