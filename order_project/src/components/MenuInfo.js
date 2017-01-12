import React from 'react';

export default class MenuInfo extends React.Component {
  render() {
    return(
      <section>
        <h1>{this.props.menu.menu_name}</h1>
        <span className="chef-name">{this.props.menu.chef_name}</span>
        <p>{this.props.menu.menu_description}</p>
        <span className="price">{this.props.menu.price}원</span>
      </section>
    );
  }
}
