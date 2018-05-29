const takeWhatYouNeedFromAComicList = data => ({
  limit: data.data.limit,
  total: data.data.total,
  count: data.data.count,
  offset: data.data.offset,
  results: data.data.results.map(comic => ({
    id: comic.id,
    title: comic.title,
    digitalId: comic.digitalId,
    thumbnail: comic.thumbnail,
    description: comic.description,
  })),
});

const takeWhatYouNeedFromAComic = (data) => {
  const comic = { ...data.data.results[0] };
  return {
    id: comic.id,
    title: comic.title,
    digitalId: comic.id,
    images: comic.images,
    pageCount: comic.pageCount,
    thumbnail: comic.thumbnail,
    description: comic.description,
    variantDescription: comic.variantDescription,
  };
};

module.exports = {
  takeWhatYouNeedFromAComic,
  takeWhatYouNeedFromAComicList,
};
