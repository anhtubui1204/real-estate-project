import React, { Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import './App.css';
// import AppNavbar1 from './components/layout/AppNavbar1';
// import LoginLogout from './components/Users/LoginLogout';
import RouterURL from './components/RouterURL';
import Footer from './components/layout/Footer';
import localStorageExpire from './javascript-localstorage-expiry';

class App extends Component {
  
  render() {
    localStorageExpire();
    return (
      <Router>
        <div className="App">
          <RouterURL/>
        </div>
        <Footer/>
      </Router>
    );
  }
}

export default App;