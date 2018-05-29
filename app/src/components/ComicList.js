import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComicItem from './ComicItem';
import { getComicsByCharacterId } from '../services/comics';


class ComicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics : [],
      hasMoreItems: true,
    };

    this.loadItems = this.loadItems.bind(this);
  }

  loadItems(page) {

  }


}


export default ComicList;
