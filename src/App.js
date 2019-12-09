import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slajder from './slajder.js';

class App extends Component{

  constructor(props){
    super(props);
    // this.props.dispatch({ type: 'CHANGE_PATH', path: this.props.location.pathname});

    this.state={
    }
  }

  render(){


    return (
      <div id="main-view">
        <Slajder number = {23} number2 = {24} color = {false} />
        <Slajder number = {31} number2 = {32} color = {true} />
      </div>
    );
  }
}

export default App;
