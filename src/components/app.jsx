import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: "QPQ3xlJhqR1BXl89RG",
    };
    this.giphyClient = giphy('IxTVuLah0xVfoDMT6MJqPRmG6qhWtrGB');
  }

  search = (query) => {
    this.giphyClient.search(
      {
        q: query,
        limit: 10
      },
      (err, res) => {
        this.setState(
          {
            gifs: res.data,
            selectedGif: res.data[0].id
          }
        );
      }
    );
  };

  setGif = (gifId) => {
    this.setState(
      { selectedGif: gifId }
    );
  };

  render() {
    const { gifs, selectedGif } = this.state;

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGif} setGifFunction={() => {}} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} setGifFunction={this.setGif} />
        </div>
      </div>
    );
  }
}

export default App;
