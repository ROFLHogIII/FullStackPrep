import React, { Component } from 'react';

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

    componentWillMount() {
        fetch(chirpAPI + this.props.match.params.id)
            .then(res => res.json())
            .then(ob => this.setState({
                data: ob,
                name: ob.name,
                text: ob.text
            }))
    }
    editChirp() {
        let body = {
            name: this.state.name,
            text: this.state.text
        };
        fetch(chirpAPI + this.props.match.params.id, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
    deleteChirp() {
        let body = {
            name: this.state.name,
            text: this.state.text
        };
        fetch(chirpAPI + this.props.match.params.id, {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-3">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            <p>{this.state.name}</p>
                        </div>
                        <div className="card-body text-dark">
                            <p className="card-text"> {this.state.text}</p>
                        </div>
                    </div>
                </div>
                <input placeholder={this.state.name} value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <input placeholder={this.state.text} value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
                {/* put a button here to link to handelbutton and make editable forms */}
                <button className='btn btn-primary' onClick={() => { this.editChirp(); this.props.history.replace('/') } }>Save Chirp</button>
                <button className='btn btn-danger' onClick={() => { this.deleteChirp(); this.props.history.replace('/') } }>Delete Chirp</button>
            </React.Fragment>
        )
    }
};
export default EditChirp