import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import ComicItem from './ComicItem';
import { getComicsByCharacterId } from '../services/comics';


class ComicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
      // nextOffset: null,
      hasMoreItems: true,
    };

    this.loadItems = this.loadItems.bind(this);
    this.handleSelectComic = this.handleSelectComic.bind(this);
  }

  handleSelectComic(comicId) {
    this.props.onComicSelected(comicId);
  }

  async loadItems() {
    const { id } = this.props.superhero;
    const { setLoading } = this.props;
    const { nextOffset } = this.state;
    await setLoading(true);
    getComicsByCharacterId(id, nextOffset || 0)
      .then(async (res) => {
        const comics = this.state.comics
          .slice(0)
          .concat(res.data.results)
          .map(comic => ({ ...comic, key: comic.id }));
        await setLoading(false);
        if (res.data.offset < res.data.total) {
          this.setState({
            ...this.state,
            comics,
            nextOffset: res.data.offset + res.data.count + 1,
          });
        } else {
          this.setState({ ...this.state, hasMoreItems: false });
        }
      })
      .catch(async () => {
        this.setState({ ...this.state, hasMoreItems: false });
        await setLoading(false);
      });
  }

  render() {
    const { comics, hasMoreItems } = this.state;
    const items = comics.slice(0).map(comic => (
      <ComicItem
        name={comic.title}
        thumbnail={comic.thumbnail}
        description={comic.description}
        key={`comic-${comic.id}-${comic.digitalId}`}
        onClick={() => this.handleSelectComic(comic.id)}
      />
    ));

    return (
      <div className="comics-container">
        <InfiniteScroll
          pageStart={0}
          threshold={10}
          hasMore={hasMoreItems}
          loadMore={this.loadItems}
          useWindow={false}
        >
          <div>
            {items}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

ComicList.propTypes = {
  superhero: PropTypes.shape({
    id: PropTypes.oneOfType(['number', 'string']),
  }).isRequired,
  setLoading: PropTypes.func.isRequired,
  onComicSelected: PropTypes.func.isRequired,
};

export default ComicList;
