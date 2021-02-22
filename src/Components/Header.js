import React, { Component } from 'react';

class Header extends Component {
   state={
      selectedNav:{id:'1',color:"#F06000"},
      headerColorShow:false
   }
   componentDidMount()
   {
   
     
       document.addEventListener('scroll', this.handleScroll)
   
   }
   handleScroll = () => {
      const {selectedNav}={...this.state}
      let get=this.getOffSetTopOfElement;
      let position=window.scrollY;
      
      if(position>get('home') && position<get('about') )
      selectedNav.id='home'
      if(position>get('about') && position<get('resume') )
      selectedNav.id='about'
      if(position>get('resume') && position<get('portfolio') )
      selectedNav.id='resume'
      if(position>get('portfolio') && position<get('testimonials') )
      selectedNav.id='portfolio'
      if(position>get('testimonials') && position<get('contact') )
      selectedNav.id='testimonials'
      if(position>get('contact'))
      selectedNav.id='contact'
     this.setState({selectedNav})
    }

    getOffSetTopOfElement=(element)=>{
      let ele=document.getElementById(element)
      if(ele!==null)
      return ele.offsetTop;

      console.log('not return null');
  
    }

    
   // handleNav=(nav)=>{
   //  const {selectedNav}={...this.state}
   //  selectedNav.id=nav;
   //  this.setState({selectedNav})
   // }
  render() {
    const {selectedNav,headerColorShow}=this.state;
    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap" style={{backgroundColor:selectedNav.id!=='home'?'black':''}}>

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href={`#`+selectedNav.id} title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li ><a style={{color:selectedNav.id==='home'?selectedNav.color:''}}  href="#home">Home</a></li>
            <li ><a style={{color:selectedNav.id==='about'?selectedNav.color:''}}  href="#about">About</a></li>
	         <li ><a style={{color:selectedNav.id==='resume'?selectedNav.color:''}}  href="#resume">Resume</a></li>
            <li ><a style={{color:selectedNav.id==='portfolio'?selectedNav.color:''}}  href="#portfolio">Works</a></li>
            <li ><a style={{color:selectedNav.id==='testimonials'?selectedNav.color:''}}  href="#testimonials">Testimonials</a></li>
            <li ><a style={{color:selectedNav.id==='contact'?selectedNav.color:''}}  href="#contact">Contact</a></li>
         </ul>

      </nav>




      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
