import React, { Component} from 'react';
import MovieElement from './movieElement'

export default class MovieList extends Component {
    render(){
        return(
            <div className="border w-75">
                <MovieElement/>
            </div>
        )
    }
}