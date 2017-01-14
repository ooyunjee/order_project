import React from 'react';
import { BrowserRouter as Router, Link, Match } from 'react-router';
import Home from './Home';
import Menu from './Menu';

import '../css/App.css';
import '../css/normalize.css';
import '../css/font-awesome.min.css';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1 className="a11y">상단 메뉴</h1>
            <ul className="container">
              <li><Link to='/'>plating</Link></li>
            </ul>
          </nav>
          <Match exactly pattern='/' component={Home}/>
          <Match pattern='/menu' component={Menu}/>
          <footer className="footer">
            <p><i className="fa fa-phone"></i>+82 070 7777 6114</p>
            <address><i className="fa fa-map-marker"></i>서울시 논현동 122-8 동화히스토리 지하1층, 플레이팅</address>
            <p><i className="fa fa-envelope"></i>contact@plating.co.kr</p>
          </footer>
        </div>
      </Router>
    );
  }
}
