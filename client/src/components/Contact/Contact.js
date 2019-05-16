import React, { Component } from 'react';
import AppNavbar1 from '../layout/AppNavbar1';
import './contact.css'
class Contact extends Component {
    render() {
        return (
                <div>
                <AppNavbar1 contactActive={"nav-item active"}/>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAOcs5VtxODOq_ARsAZBy5GKemfnfWkYW8 &q=RMIT University Vietnam Saigon South Campus" width="100%" height="650px" frameBorder={0} style={{border: 0}} allowFullScreen />
                            </div>
                            </div>
                            <div className="col-6">
                                <div className="contact-form">
                                    <h1 className="title">Contact Me</h1>
                                    <h2 className="subtitle">I am here assist you.</h2>
                                    <form className="cmxform" id="commentForm" method="get" action>
                                        <input id="cname" name="name" minLength={2} type="text" placeholder="Your Name" required />
                                        <input id="cemail" type="email" name="email" placeholder="Your E-mail Address" required />
                                        <input type="tel" name="phone" placeholder="Your Phone Number" required />
                                        <textarea id="ccomment" name="comment" rows={8} placeholder="Your Message" required defaultValue={""} />
                                        <button className="btn-send">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                       
                  
                    
                    </div>
                </div>
                </div>
                
              
        );
    }
}

export default Contact;