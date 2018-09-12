import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';


const chirpAPI = "/api/chirps/"

class OneChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: "",
            text: "",
        }
    }

    componentDidMount() {
        fetch(filmAPI + this.props.match.params.id)
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
                                <p className="card-text"> {props.chirp.text}</p>
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