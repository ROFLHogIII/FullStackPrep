import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import AllChirps from './components/AllChirps' // displays a list of chirps, form for making new chrips via onClick even to POST to api using fetch
import OneChirp from './components/OneChirp'
import EditChirp from './components/EditChirp'

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={AllChirps} />
                        <Route exact path="/chirp/:id" component={OneChirp}/>
                        <Route exact path="/chirp/:id/edit" component={EditChirp}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App