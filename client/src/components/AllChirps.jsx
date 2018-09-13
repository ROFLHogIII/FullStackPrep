import React, { Component } from 'react';
import ChirpCard from "./ChirpCard"


const chirpAPI = "/api/chirps/"

class AllChirps extends Component {
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
            .then(data => {
                let chirps = Object.keys(data).map(id => {
                    return data[id];
                })
                chirps.pop()
                this.setState({
                    data: chirps
                })
            });
    }

    handleButtonClick() {
        let body = {
            name: this.state.name,
            text: this.state.text
        }
        fetch(chirpAPI, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then(data => {
                let chirps = Object.keys(data).map(id => {
                    return {
                        id: id,
                        name: date[id].name,
                        text: data[id].text
                    };
                })
                chirps.pop()
                this.setState({
                    data: chirps,
                    name: '',
                    text: ''
                });
            });
    }

    render() {
        return (
            <React.Fragment>
                <input placeholder='name' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <input placeholder='chirp' value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
                <button className='btn btn-primary' onClick={() => this.handleButtonClick()}>Chirp it up!</button>
                <div className="row">
                    {this.state.data.map((chirp, id,) =>
                        <ChirpCard id={id} key={id} chirp={chirp} />
                    )}
                </div>
            </React.Fragment>
        )
    }
};
export default AllChirps;