import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slajder from './Slajder.js';
import HomePage from './HomePage.js';
import TopBar from './TopBar.js';

class App extends Component{

  constructor(props){
    super(props);

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
        {/*{slajders}*/}
        <TopBar imie = {"Krzysiu"}/>
        <HomePage/>
      </div>
    );
  }
}

export default App;
