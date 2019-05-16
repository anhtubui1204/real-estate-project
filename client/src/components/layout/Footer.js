import React, { Component } from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
        <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="brief-about">
                        <p>We are an award-winning creative agency, dedicated to the best result in web design,
                            promotion, business
                            consulting, and marketing.</p>
                    </div>
                    <p className="rights">
                        <span>©  </span>
                        <span
                            className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span>
                            <span>All
                            Rights
                            Reserved.
                            </span>
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-4 border-left">
                    <h5>Contact</h5>
                    <dl className="contact-list">
                        <dt>Address:</dt>
                        <dd>720 Nguyen Van Linh, District 7, Ho Chi Minh City, Vietnam</dd>
                    </dl>
                    <dl className="contact-list">
                        <dt>email:</dt>
                        <dd>rmit.sgs@rmit.edu.vn</dd>
                    </dl>
                    <dl className="contact-list">
                        <dt>phones:</dt>
                        <dd>+8489998886
                        </dd>
                    </dl>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-4 border-left">

                    <h5>Links</h5>
                    <ul style={myStyle.ul} className="nav-list">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/ads"}>Ads</Link></li>
                        
                    </ul>

                </div>
               
              </div>
            </div> 
        </div>
        );
    }
}

const myStyle = {
    ul: {
        listStyle: 'none'
    }
    
}

export default Footer;