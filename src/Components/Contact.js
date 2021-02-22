import React, { Component } from 'react';
import joi from 'joi';
import valid from '../Validation';

class Contact extends Component {
   state={
      data:{},
      errors:{}
   }
   schema={
      contactName:joi.string().required().label('Contact Name'),
      contactEmail:joi.string().email().required().label('Contact Email'),
      contactSubject:joi.string().required().label('Contact Subject'),
      contactMessage:joi.string().required().label('Contact Message'),
   }
   handleChange=(e)=>{
      const  {data,errors}={...this.state}
      const errorMessage = valid.validateProperty(e.currentTarget, this.schema);
      if (errorMessage) errors[e.currentTarget.name] = errorMessage;
      else delete errors[e.currentTarget.name];

      data[e.currentTarget.name]=e.currentTarget.value;
      this.setState({data});
   }
   handleSubmit=(data)=>{
     const errors = valid.validate(data, this.schema);
     console.log(errors);
     this.setState({ errors: errors || {} });
     if (errors) return;

     alert('success');

   }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

   
    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

            
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" style={{backgroundColor:this.state.errors.contactName?'red':''}} size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                     </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" style={{backgroundColor:this.state.errors.contactEmail?'red':''}} size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" style={{backgroundColor:this.state.errors.contactSubject?'red':''}} id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" style={{backgroundColor:this.state.errors.contactMessage?'red':''}} name="contactMessage" onChange={this.handleChange}></textarea>
                  </div>

                  <div>
                     <button className="submit" onClick={()=>this.handleSubmit(this.state.data)}>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
