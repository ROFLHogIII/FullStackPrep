import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import ChirpCard from "./ChirpCard"


const chirpAPI = "/api/chirps/"

class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: '',
            text: '',
        }
    }

    componentWillMount() {
        fetch(chirpAPI)
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    handleButtonClick() {
        let body = {
            name: this.state.name,
            age: this.state.text
        }
        fetch(chirpAPI, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then(data => this.setState({
                data,
                name: '',
                text: ''
            }));
    }

    render() {
        return (
            <React.Fragment>
                <input placeholder='name' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <input placeholder='chirp' value={this.state.text} onChange={(e) => this.setState({ age: e.target.value })} />
                <button className='btn btn-primary' onClick={() => this.handleButtonClick()}>Chirp it up!</button>
                <div className="row">
                    {this.state.data.map((chirp, id) =>
                        <ChirpCard key={id} chirp={chirp} />
                    )}
                </div>
            </React.Fragment>
        )
    }
};
export default AllChirps;