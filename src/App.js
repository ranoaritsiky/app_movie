import React, { Component } from 'react';
import { Header,MovieList,MovieDetails } from './Components';

class App extends Component {
  render() {
    return (
      <div div className = 'App d-flex flex-column' >
        <Header />
        <div className="d-flex flex-row flex-fill mt-3 m-2 border">
          <MovieList />
          <MovieDetails/>
        </div>
      </div>
    )
  }
}
export default App;
