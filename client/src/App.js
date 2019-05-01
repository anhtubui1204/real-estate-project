import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import AppNavbar1 from './components/layout/AppNavbar1';
import LoginLogout from './components/Users/LoginLogout';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar1/>
          <h1>hello</h1>
          <LoginLogout/>
        </div>
      </Router>
    );
  }
}

export default App;