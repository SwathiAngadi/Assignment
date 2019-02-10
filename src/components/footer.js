import React, { Component } from 'react';
import logo from './../logo.svg';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container test">
                    <div className="row ">
                    <div className="col">
                        <div className="float-left">
                            <img src={logo} className="App-logo" alt="logo" />
                            <span className="text-muted mr-1">LOGO</span><span className="text-muted"> &copy;2019 Mobiotics. All Rights Reserved</span>
                        </div>
                        <div className=" float-right">
                            <ul className=" text-muted terms">
                                <li>About </li>
                                <li> Help </li> 
                                <li>Terms and Conditons </li> 
                                <li>Privacy Policy</li>  
                                <li>Support</li>
                            </ul>
                        </div> 
                        </div> 
                    </div>
                
                  <div className="row">
                     <div className="col">
                        <div className="float-left app-class">
                            <p className="text-muted">Our Apps</p>
                            <img src="https://www.neoncrm.com/wp-content/uploads/2017/06/appstore.png" height="34" width="100"></img>
                            <img src="https://www.codot.gov/safety/alcohol-and-impaired-driving/planahead/2011-assets/android-market-icon.png/image" height="40" width="100"></img>
                        </div>
                        <div className="float-right social-media">
                            <p className="text-muted">Connect with us <span><i className="fab fa-facebook mr-2"></i><i className="fab fa-pinterest mr-2"></i><i className="fab fa-twitter mr-2"></i><i className="fab fa-linkedin"></i></span></p>
                        </div>  
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Footer;