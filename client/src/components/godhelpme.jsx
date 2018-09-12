// purly for referance

import React, { Component, Fragment } from 'react';

class NewChirp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        fetch('/api/chirps/')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    handleButtonClick() {
        let body = {
            name: this.state.name,
            age: this.state.text
        }
        fetch('/api/people/', {
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
        console.log(this.state.data);
        return (
            <Fragment>
                <input placeholder='name' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <input placeholder='chirp' value={this.state.text} onChange={(e) => this.setState({ age: e.target.value })} />
                <button className='btn btn-primary' onClick={() => this.handleButtonClick()}>Chirp it up!</button>
                {this.state.data.map(derp => {
                    return <h1>{derp.name} : {derp.age}</h1>
                })}
            </Fragment>
        );
    }
}

export default HelloWorld;