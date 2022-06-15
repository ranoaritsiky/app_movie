import React, { Component } from 'react';

export default class MovieElement extends Component {

  render() {
    return (
      <div className="w-50 p-2">
        <div className="border d-flex ">
          <img width="150" height="200" alt="film" src={this.props.movie.img}/>
          <div className="flex-fill d-flex flex-column p3 ">
            <h5 className="pl-2 pt-2">{this.props.movie.title}</h5>
            <hr className="w-100"/>
            <p className="card-text p-2">
              {this.props.movie.details}
            </p>
          </div>
        </div>
      </div>
    );
    
  }

}