import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render() {
    const gifs = [
      { id: "a93jwI0wkWTQs" },
      { id: "xT5LMHxhOfscxPfIfm" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={gifs[0].id} />
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
