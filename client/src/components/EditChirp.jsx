import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';


const chirpAPI = "/api/chirps/"

class OneChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: '',
            text: '',
        }
    }

    componentDidMount() {
        fetch(chirpAPI + this.props.match.params.id)
            .then(res => res.json())
            .then(ob => this.setState({ data: ob }))
    }

    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center">
                <div className="col-md-3">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            <h1>{this.state.chirp.name}</h1>
                        </div>
                        <div className="card-body text-dark">
                            <p className="card-text">Director: {this.state.movies.director}</p>
                            <p className="card-text">Producer: {this.state.movies.producer}</p>
                            <p className="card-text">Released: {this.state.movies.release_date}</p>
                            <p className="card-text">Rotan Tomatoes Score: {this.state.movies.rt_score}</p>
                            <p className="card-text">{this.state.movies.description}</p>
                        </div>
                    </div>
                </div>
                </div>

            </React.Fragment>
        )
    }
};
export default OneChirp
;