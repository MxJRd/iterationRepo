import React, { Component } from 'react';
import Donation from './components/Donation.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Apply from './components/Apply.jsx';
import ButtonAppBar from './components/Appbar.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    } componentDidMount() {
        console.log("inside component did mount")
        fetch('/getDonations')
            .then(res => res.json())
            .then((totals) => {
                console.log('totals: ', totals)
                const totalRaised = totals;
                return this.setState({
                    ...this.state,
                    totalRaised: totals
                })
            })
            .catch(err => console.log('get project: ERROR: ', err));
    } render() {
        return (
            <Router>
                <div className="home">
                    <Switch>
                        <Route exact path="/">
                            <div className="main">
                                <ButtonAppBar />
                                <h1>Codesmith Alumni Scholarship</h1>
                                <p>info about scholarship </p>
                                <h3 id="totalHomePage">Total Raised ${this.state.totalRaised}</h3>                    </div>
                            <button><Link to="/donation"> Donate </Link></button>
                            <button><Link to="/apply" style={{ color: 'black' }}> Apply </Link></button>
                        </Route>
                        <Route path="/donation">
                            <Donation />
                        </Route>
                        <Route path="/apply">
                            <Apply />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
};

export default App;