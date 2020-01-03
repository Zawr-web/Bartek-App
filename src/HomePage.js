import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HomePage extends Component{

  constructor(props){
    super(props);

    this.state={

    }
  }


  render(){


    return (
      <div class="container-fluid h-100 ">
        <div class="row h-20 bg-primary">
         <div class="col">
          <h1>Main</h1>
         </div>
        </div>
        <div class="row h-30 bg-dark">
           <div class="col">
             1
           </div>
           <div class="col">
             2
           </div>
           <div class="col">
             3
           </div>
        </div>
        <div class="row h-50 bg-primary">
          <div class="col-xl-2 col-sm-6 bg-white">
            a
          </div>
          <div class="col-xl-10 col-sm-6 bg-red">
            b
          </div>
        </div>
    </div>
    );
  }
}

export default HomePage;
