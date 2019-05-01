import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";

// import AppNavbar1 from './components/layout/AppNavbar1';
// import LoginLogout from './components/Users/LoginLogout';
import RouterURL from './components/RouterURL';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <RouterURL/>
        </div>
      </Router>
    );
  }
}

export default App;