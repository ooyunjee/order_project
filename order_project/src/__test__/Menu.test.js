import React from 'react';
import {shallow, mount} from 'enzyme';
import Menu from '../components/Menu';
import MenuInfo from '../components/MenuInfo';

describe('Menu', () => {
  let menu;
  let map;
  let menuData = {
    menu_id: 1,
    menu_name: 'menu name',
    chef_name: 'chef name',
    menu_description: 'menu description',
    price: 10000
  };

  beforeEach(() => {
    map = jest.fn();
    menu = mount(<Menu map={map}/>);
  });

  it('renders nested components', () => {
    expect(menu.find('MenuInfo').length).toEqual(6);
    expect(menu.find('Order').length).toEqual(1);
  });

  it('requires map prop', () => {
    expect(menu.props().map).toBeDefined();
  });

  it('requires menuData state', () => {
    expect(menu.state().menuData).toBeDefined();
  });

  test('menu name click', () => {
    const menuInfo = shallow(<MenuInfo menu={menuData}/>);
    const menu_name = menuInfo.find('h1');
    menu_name.simulate('click');
    expect(menu_name.text()).toContain('menu name');
    expect(menuInfo.props('isSelected')).not.toEqual(false);
  });
});
