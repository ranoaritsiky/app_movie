import React, { Component} from 'react';
export default class MovieElement extends Component {
    render(){
        return(
            
            <div className="w-25 p-2">
                <div className="border d-flex">
                    <img width="150" height="200" alt="film" src="https://thispersondoesnotexist.com/image" />
                    <div className="flex-fill d-flex flex-column p3 ">
                        <h5 className="pl-2 pt-2 m-3">Title</h5>
                        <hr className="w-100"/>
                        <p className="card-text p-2">
                            details
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}