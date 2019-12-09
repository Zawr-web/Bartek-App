import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import * as serviceWorker from './serviceWorker';

class Main extends Component{

  constructor(props){
    super(props);

    this.state={
    }
  }

  componentDidMount() {
  }

  render(){
    return(
        <App/>
    );

  }

}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
