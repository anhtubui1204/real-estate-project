import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import AppNavbar1 from './components/layout/AppNavbar1';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar1/>
          <h1>hello</h1>
        </div>
      </Router>
    );
  }
}

export default App;