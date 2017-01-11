import React from 'react';
import { BrowserRouter as Router, Link, Match } from 'react-router';
import Home from './Home';
import Menu from './Menu';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
          </ul>
          <hr/>
            <Match exactly pattern='/' component={Home}/>
            <Match pattern='/menu' component={Menu}/>
        </div>
      </Router>
    );
  }
}

export default App;
