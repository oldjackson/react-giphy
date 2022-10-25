import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        { id: "a93jwI0wkWTQs" },
        { id: "xT5LMHxhOfscxPfIfm" }
      ],
      selectedGif: "a93jwI0wkWTQs",
    };
  }

  render() {
    const { gifs, selectedGif } = this.state;

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
