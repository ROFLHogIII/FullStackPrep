import React from 'react';
import { Link } from 'react-router-dom';

let ChirpCard = (props) => (
    <React.Fragment>
        <div className="col-md-3">
            <div className="card border-dark mb-3">
                <div className="card-header">
                    <p>{props.chirp.name}</p>
                </div>
                <div className="card-body text-dark">
                    <p className="card-text"> {props.chirp.text}</p>
                    <Link to={`/chirp/${props.movie.id}/edit`} className="btn btn-primary">Edit Chirp</Link>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default ChirpCard;