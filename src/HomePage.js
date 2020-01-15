import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Baner from './baner.jpg'

 class HomePage extends Component{

  constructor(props){
    super(props);

    this.state={

    }
  }


  render(){

    let sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."


    return (
      <div  className="container-fluid h-100 ">
        <div  className="row menu-top h-20 bg-primary">

            <div  className="col"> <a href="#">Strona Główna</a> </div>
            <div  className="col"> <a href="#">Oferta</a> </div>
            <div  className="col"> <a href="#">Blog</a> </div>
            <div  className="col"> <a href="#">Kontakt</a> </div>

        </div>
        <div  className="row h-30 test-class bg-dark">
           <div  className="col margines">
             <img className="length" src={Baner} alt="Ładuje się to zdjęcie noo..."/>
           </div>
        </div>
        <div  className="row h-50 bg-primary">
          <div  className="col-xl-2 col-sm-6 bg-white">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Proin porta tortor pulvinar quam porttitor, finibus ullamcorper orci ornare.
             Vivamus ac metus a risus placerat efficitur.</p>
          </div>
          <div  className="col-xl-10 col-sm-6 bg-red">
            <News text={sampleText}/>
          </div>
        </div>
    </div>
    );
  }
}

class News extends Component {

  constructor(props){
    super(props);

    this.state={

    }
  }

  render(){
    return (
      <p>{this.props.text}</p>
    )
  }
}
export default HomePage;
