import React, { Component} from 'react';

export default class MovieDetails extends Component {
    render(){
        return(
            <div className="w-25">
                <div className="d-flex flex-column">
                    <h3>{this.props.movieElement.title}</h3>
                    <hr/>
                    <img src={this.props.movieElement.img} alt="myimage" style={{'max-height':'15rem'}}/>
                    <hr/>
                    <span>
                        {this.props.movieElement.details}
                    </span>
                    <hr/>
                    <p>
                        {this.props.movieElement.description}
                    </p>
                </div>
            </div>
        )
    }
}