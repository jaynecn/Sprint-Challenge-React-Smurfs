import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  fetchItemsWithAxios = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  componentDidMount() {
    this.fetchItemsWithAxios();
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Land of Smurfs</h1>
        <div className="nav-bar">
          <NavLink exact to="/" activeClassName="activeNavButton" className="nav-button">Smurfs</NavLink>
          <NavLink to="/smurf-form" activeClassName="activeNavButton" className="nav-button">Add a New Smurf</NavLink>
        </div>
        <Route exactpath="/smurf-form" render={props => 
        <SmurfForm {...props} addSmurf={props.addSmurf}handleInputChange={this.props.handleInputChange}/>} />
        <Route exactpath="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} /> } />
      </div>
    );
  }
}

export default App;
