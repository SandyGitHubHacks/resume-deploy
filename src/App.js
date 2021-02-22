import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
    this.home=React.createRef();
    this.about=React.createRef()
    this.contact=null//React.createRef();
    this.resume=null//React.createRef();
    this.portfolio=null//React.createRef();
    this.testimonials=null//React.createRef();

    

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
   // window.addEventListener('scroll', this.handleScroll);
  }
  // handleScroll=(id)=>{
  
  // }

  render() {
    let id=document.getElementById('contact')
    if(id!==null)
    console.log(id.offsetTop)

    var v = (

      <div className="App">
        <Header ref={this.home}   data={this.state.resumeData.main}/>
        <About ref={(ref) => { this.about = ref }} data={this.state.resumeData.main}/>
        <Resume ref={this.resume} data={this.state.resumeData.resume}/>
        <Portfolio ref={this.portfolio} data={this.state.resumeData.portfolio}/>
        <Testimonials ref={this.testimonials} data={this.state.resumeData.testimonials}/>
        <Contact ref={this.contact} data={this.state.resumeData.main}/>
        <Footer  data={this.state.resumeData.main}/>
      </div>
    );



    return v;
  }
  
}

export default App;
