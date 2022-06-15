import React, { Component } from 'react';
import MovieElement from './MovieElement';

export default class MovieList extends Component {

  render() {
    return (
      <div className="w-75 d-flex flex-row flex-wrap align-content-start">
        <MovieElement movie={this.props.mymovie[0]} />
        <MovieElement movie={this.props.mymovie[1]}/>
        <MovieElement movie={this.props.mymovie[2]}/>
        <MovieElement movie={this.props.mymovie[3]}/>
      </div>
    );
  }

}