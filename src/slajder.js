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
    if(color){
      slajder = <div id="content" className="slajderStyle2">
                <h1>Witaj {this.props.number} {this.props.number2}</h1>
                </div>
    }else{
      setTimeout(2000);
      console.log("STAN", this.state.number2);
      slajder = <div id="content" className="slajderStyle">
                <h1>Witaj {this.props.number} {this.props.number2}</h1>
                </div>
    }
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
