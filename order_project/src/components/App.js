import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// import { Home } from './Home';
import Menu from './Menu';
// import NotFound from './NotFound';

import '../css/App.css';
import '../css/normalize.css';
import '../css/font-awesome.min.css';

import '../css/Home.css';

const Home = () => (
  <div className="container home">
    <h1 className="home-title">plating</h1>
    <p className="home-desc">셰프의 요리를 집에서</p>
    <h3 className="home-go-to-menu"><Link to="/menu">주문 하러 가기!</Link></h3>
  </div>
);

const App = () => (
  <Router>
    <div>
      <nav>
        <h1 className="a11y">상단 메뉴</h1>
        <ul className="container">
          <li><Link to='/'>plating</Link></li>
        </ul>
      </nav>
      <Route exact path="/" component={Home}/>
      <Route path="/menu" component={Menu}/>
      {/*<Miss component={NotFound} />*/}
      <footer className="footer">
        <p><i className="fa fa-phone"></i>+82 070 7777 6114</p>
        <address><i className="fa fa-map-marker"></i>서울시 논현동 122-8 동화히스토리 지하1층, 플레이팅</address>
        <p><i className="fa fa-envelope"></i>contact@plating.co.kr</p>
      </footer>
    </div>
  </Router>
);

export default App;
