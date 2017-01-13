import React from 'react';
import { BrowserRouter as Router, Link, Match } from 'react-router';
import Home from './Home';
import Menu from './Menu';

import '../css/App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="container">
              <li><Link to='/'>plating</Link></li>
            </ul>
          </nav>
          <Match exactly pattern='/' component={Home}/>
          <Match pattern='/menu' component={Menu}/>
        </div>
      </Router>
    );
  }
}

export default App;
