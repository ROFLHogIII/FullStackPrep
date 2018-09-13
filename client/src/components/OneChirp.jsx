import React, { Component } from 'react';
import ChirpCard from "./ChirpCard"


const chirpAPI = "/api/chirps/"

class OneChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            name: "",
            text: "",
            id: ""
        }
    }

    componentWillMount() {
        fetch(chirpAPI + this.props.match.params.id)
            .then(res => res.json())
            .then(ob => this.setState({
                data: ob,
                name: ob.name,
                text: ob.text,
                id: this.props.match.params.id
            }))
    }

    render() {
        return (
            <React.Fragment>
                <ChirpCard id={this.state.id} chirp={this.state.data} />
            </React.Fragment>
        )
    }
};
export default OneChirp
    ;