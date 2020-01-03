import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Slajder extends Component{

  constructor(props){
    super(props);
    // this.props.dispatch({ type: 'CHANGE_PATH', path: this.props.location.pathname});

    this.state={
      number2: this.props.number2,
    }

    this.selectSlajder = this.selectSlajder.bind(this);
  }

  selectSlajder(color){
    let slajder;
    let newStyle={
      backgroundColor: this.props.hex
    }

    slajder = <div id="content" style={newStyle} class="slajderstyle">
              <h1>Witaj {this.props.imie}</h1>
              </div>
    return slajder;

  }

  render(){

    let slajder = this.selectSlajder(this.props.color);

    return (
      slajder
    );
  }
}

export default Slajder;
