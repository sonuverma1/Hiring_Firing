import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>

class App extends Component {
    //Lifecycle hook
    //we are wiring up action creator with app as many components may need it.
    componentDidMount(){

        //Acessing the action creator through props
        this.props.fetchUser();
    }
    render(){

        return(
            <div>
                <BrowserRouter>
                    <div className = "container" >
                        <Header />
                        <Route exact path = "/" component = {Landing} />
                        <Route exact path = "/dashboard" component = {Dashboard} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};
// first argument is about map state's of props function and the second argument is to wire up all the action creators with the app
// The actions are assigned to the app component as the props
export default connect(null, actions)(App);
