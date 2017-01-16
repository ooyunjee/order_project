import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';


describe('Home', () => {
  let home;

  beforeEach( () => {
    home = shallow(<Home />);
  });

  it('renders without crashing', () => {
    shallow(<Home />);
  });

  it('rendered the title', () => {
    expect(home.contains(<h1 className="home-title">plating</h1>)).toEqual(true);
  });

  it('rendered the description', () => {
    expect(home.contains(<p className="home-desc">셰프의 요리를 집에서</p>)).toEqual(true);
  });


});
