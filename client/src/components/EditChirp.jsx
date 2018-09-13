import React, { Component } from 'react';
import ChirpCard from "./ChirpCard"

const chirpAPI = "/api/chirps/"

class EditChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            name: '',
            text: '',
        }
    }

    componentDidMount() {
        fetch(chirpAPI + this.props.match.params.id)
            .then(res => res.json())
            .then(ob => this.setState({ 
                data: ob,
                name: ob.name,
                text: ob.text
             }))
    }
    handleButtonClick() {
        let body = {
            name: this.state.name,
            text: this.state.text
        }
        fetch(chirpAPI, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        })}

    render() {
        return (
            <React.Fragment>
                <ChirpCard chirp={this.state.data} />
                {/* put a button here to link to handelbutton and make editable forms */}
                <button className='btn btn-danger' onClick={() => this.context.history.push('/')}>test</button>
            </React.Fragment>
        )
    }
};
export default EditChirp