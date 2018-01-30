import React from 'react';
import { Link } from 'react-router';

import '../css/Home.css';

const Home = () => (
  <div className="container home">
    <h1 className="home-title">plating</h1>
    <p className="home-desc">셰프의 요리를 집에서</p>
    <h3 className="home-go-to-menu"><Link to="/menu">주문 하러 가기!</Link></h3>
  </div>
);

export default Home;
