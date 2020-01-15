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
          <ol>

            <li><a href="#">Strona Główna</a></li>
            <li><a href="#">Oferta</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Kontakt</a></li>

          </ol>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Proin porta tortor pulvinar quam porttitor, finibus ullamcorper orci ornare.
             Vivamus ac metus a risus placerat efficitur.</p>
          </div>
          <div class="col-xl-10 col-sm-6 bg-red">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Proin porta tortor pulvinar quam porttitor, finibus ullamcorper orci ornare.
             Vivamus ac metus a risus placerat efficitur. Curabitur non neque ut dolor dapibus semper.
             Quisque turpis neque, maximus quis elit non, sagittis sodales tortor.
             Sed convallis pharetra ultricies. Aenean interdum convallis ligula nec ornare.
             Aenean sit amet scelerisque velit. Nam sit amet pulvinar purus, ac varius ligula.
             Sed suscipit rhoncus velit, quis condimentum purus vestibulum vitae.
             Phasellus et risus sit amet lorem tincidunt molestie non non justo.
             Suspendisse a felis pretium, lacinia mauris ultricies, aliquet odio.
              Suspendisse potenti. Nullam sodales velit non cursus rhoncus.</p>
          </div>
        </div>
    </div>
    );
  }
}

export default HomePage;
