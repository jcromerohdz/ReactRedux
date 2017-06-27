import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAzyXFLrarxc6mL08i9Qdpz6oqtcFdg7o0';

// Create a new component. This component should
// produce some HTML

const App = function(){
  return (
  <div>
    <SearchBar />
  </div>);
}

// Take this componet's generated HTML and put it
// ont the page ( in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
