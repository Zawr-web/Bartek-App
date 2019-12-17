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

    let arrayOfData = [{name: "Tomek", color: "yellow"}, {name:"Krzysiu", color: "green"}, {name:"Bartek", color: "blue"}, {name:"Jurek", color: "red"}, {name:"Marek", color: "orange"}];
    let slajder;
    let slajders =[];
    for (let i = 0; i < arrayOfData.length; i++) {
      console.log(arrayOfData[i].color);
      slajder = <Slajder imie = {arrayOfData[i].name} hex = {arrayOfData[i].color} />
      slajders.push(slajder);
    }

    return (
      <div id="main-view">
        {slajders}
      </div>
    );
  }
}

export default App;
