import React, { Component } from "react";


export default class MovieList extends Component {
    render() {
        return (
            <div className="w-75 border">
                <div className="w-25 p-2 ">
                    <div className="card">
                        <img src="http://fr.web.img4.acsta.net/pictures/15/08/19/13/04/479905.jpg" alt="Gadiator" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">
                                Gladiator
                            </h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}