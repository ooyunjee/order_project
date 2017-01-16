import React from 'react';
import { BrowserRouter as Router, Link, Match } from 'react-router';
import { shallow } from 'enzyme';
import { renderToString } from 'react-dom/server'
import App from '../components/App';

describe('Home', () => {
  let app;
  const TEXT = 'TEXT';

  beforeEach( () => {
    app = shallow(<App />);
  });

  it('renders footer', () => {
    const footer = (<footer className="footer">
      <p><i className="fa fa-phone"></i>+82 070 7777 6114</p>
      <address><i className="fa fa-map-marker"></i>서울시 논현동 122-8 동화히스토리 지하1층, 플레이팅</address>
      <p><i className="fa fa-envelope"></i>contact@plating.co.kr</p>
    </footer>);
    expect(app.contains(footer)).toEqual(true);
  });


});
