import React, { Component, Suspense} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
// import AppNavbar1 from './components/layout/AppNavbar1';
// import LoginLogout from './components/Users/LoginLogout';
import RouterURL from './components/RouterURL';

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <RouterURL/>
        </div>
        </Suspense>
      </Router>
    );
  }
}

export default App;