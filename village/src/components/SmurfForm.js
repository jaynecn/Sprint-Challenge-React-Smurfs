import React, { Component } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.setState({
      name: '',
      age: '',
      height: ''
      });
    
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then (res => {
        console.log(res)
    })
      .catch(error => {
        console.log(error.message);
      });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form className="form" onSubmit={this.addSmurf}>
          <input className="input"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input className="input"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input className="input"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <NavLink to="/smurfs" className="form-button" onClick={this.addSmurf} button type="submit">Add to the village</NavLink>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
