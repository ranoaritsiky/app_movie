import React, { Component } from 'react';

export default class MovieDetails extends Component {

  render() {
    return( 
        <div className="w-25 border p-4">
          <h5>
            {this.props.movie.title}
          </h5>
          <hr className="w-100"/>
          <div >
          <center>
            <img  src={this.props.movie.img}/>

          </center>

          </div>
          <hr className="w-100"/>

          <p className="text-secondary">
            {this.props.movie.details}
          </p>
          <hr className="w-100"/>
          <p>
            {this.props.movie.description}
          </p>
        </div>
    )

  }

}