const takeWhatYouNeedFromACharacter = (data) => {
  const character = { ...data.data.results[0] };
  return {
    id: character.id,
    name: character.name,
    thumbnail: character.thumbnail,
    description: character.description,
  };
};

module.exports = {
  takeWhatYouNeedFromACharacter,
};
