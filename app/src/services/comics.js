import client from './base';

export const getComicById = comicId => client.get(`comics/${comicId}`);
export const getComicsByCharacterId = (characterId, offset) => client.get(`characters/${characterId}/comics`, { params: { offset } });

export default {
  getComicById,
  getComicsByCharacterId,
};
