import React, { Component} from 'react';
export default class MovieElement extends Component {
    render(){
        return(
            <div className="card m-3" style={{width:'18rem'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Logo_du_Programme_des_Leos_Clubs.png" alt="LEO"/>
                <div className="card-body">
                    <hr/>
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">
                        Text here
                    </p>
                    <a href="#home" className="btn btn-primary">Go somewhere</a>
                </div>

            </div>
        )
    }
}