import React from 'react';
import {shallow} from 'enzyme';
import Order from '../components/Order';

describe('Order', () => {
  let menu = {menu_name: 'pasta', price: 100};
  let order;

  beforeEach(() => {
    order = shallow(<Order isSelected={true} menu={menu} />);
  });

  it('renders without crashing', () => {
    shallow(<Order />);
  });

  it('renders order title', () => {
    expect(order.contains(<h1>Order</h1>)).toEqual(true);
  });

  it('should have props for menu_name and price', function () {
      expect(order.props('menu_name')).toBeDefined();
      expect(order.props('price')).toBeDefined();
  });

  it('click plus button ', () => {
    const plus_btn = order.find('.plus');
    expect(plus_btn.text()).toContain('+');
    order.setState({value: 2});
    plus_btn.simulate('click');
    expect(order.state('value')).toEqual(3);
    expect(order.state('price')).toEqual(300);
  });

  it('click minus button', () => {
    const minus_btn = order.find('.minus');
    expect(minus_btn.text()).toContain('-');
    order.setState({value: 2});
    minus_btn.simulate('click');
    expect(order.state('value')).toEqual(1);
    expect(order.state('price')).toEqual(100);
  });

  it('should have order button', () => {
    const order_btn = order.find('.order-btn');
    expect(order_btn.text()).toContain('주문 하기');
  });
});
