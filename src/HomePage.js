import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Baner from './baner.jpg'

 class HomePage extends Component{

  constructor(props){
    super(props);

    this.state={
      currentNews: undefined
    }

    this.changeNews = this.changeNews.bind(this);
  }

  changeNews(e, newsElement){
    if(e.preventDefault!==undefined){
      e.preventDefault();
      this.setState({currentNews: newsElement});
    }else{
      this.setState({currentNews: e});
    }
  }


  render(){

    let sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    let title = "test1";
    let author = "Bartek";
    let data= "02.05.2020";

    let news = [];

    let news1={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               title: "test1",
               author: "Bartek",
               data: "02.05.2020"};
    let news2={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              title: "test2",
              author: "Bartek",
              data: "02.05.2020"};
    let news3={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               title: "test3",
               author: "Bartek",
               data: "02.05.2020"};
    let news4={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              title: "test4",
              author: "Bartek",
              data: "02.05.2020"};
    let news5={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
               title: "test5",
               author: "Bartek",
               data: "02.05.2020"};

    news.push(news1);
    news.push(news2);
    news.push(news3);
    news.push(news4);
    news.push(news5);

    let list = news.map((newsElement, index)=>{
      return <li onClick={(e) => this.changeNews(newsElement)}
              key={index}>{newsElement.title}</li>
    });

    let titles=<div>
                  <ul>
                  {list}
                  </ul>
                </div>

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
        <div  className="row h-50">
          <div  className="col-xl-2 col-sm-6 bg-white">
            {titles}
          </div>
          <div  className="col-xl-10 col-sm-6 bg-success p-5">
            <News news={this.state.currentNews}/>
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
    let display;
    if(this.props.news===undefined){
      display=  <div className="newsclass">
                  Proszę wybrać artykuł
                </div>
    }else{
      display=
      <div className="newsclass">
      <div className="row">
        <div className="col-11"><h1>{this.props.news.title}</h1></div>
        <div className="col-1">{this.props.news.data}</div>
      </div>
      <div className="row">
      <div className="col-11"><p>{this.props.news.author}</p></div>
      </div>
      <div className="row">
        <div className="col-11"><p>{this.props.news.text}</p></div>
      </div>
      </div>
    }
    return (
      display
    )
  }
}
export default HomePage;
