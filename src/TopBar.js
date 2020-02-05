import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class TopBar extends Component{

  constructor(props){
    super(props);

    this.state={

    }
  }


  render(){





    return (
      <div className="topbar text-align-center p-2">
      Witaj {this.props.imie}!
      </div>
    );
  }
}

export default TopBar;
