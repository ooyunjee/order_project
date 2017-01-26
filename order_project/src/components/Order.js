import React from 'react';

import '../css/Order.css';

export default class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      price: 0
    }
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: 1,
      price: nextProps.menu.price
    })
  }

  handlePlusClick() {
    this.setState({
      value: this.state.value + 1,
      price: this.props.menu.price * (this.state.value + 1)
    });
  }

  handleMinusClick() {
    if(this.state.value > 1) {
      this.setState({
        value: this.state.value - 1,
        price: this.props.menu.price * (this.state.value - 1)
      });
    }
  }

  handleOrder() {
    if(this.props.menu.price) {
      console.log('price: ' + this.props.menu.price + ', count: ' + this.state.value + ', total: ' + this.props.menu.price * this.state.value);
    }
  }

  render() {
    const price = (
      <p className="order-total">
        Total
        <span className="order-price">{this.state.price}원</span>
      </p>
    );

    const menu_counter = (
      <div>
        <h2>{this.props.menu.menu_name}</h2>
        <div className="order-counter">
          <button className="minus" onClick={this.handleMinusClick}>-</button>
          <span>{this.state.value}</span>
          <button className="plus" onClick={this.handlePlusClick}>+</button>
        </div>
        {price}
      </div>
    );

    return(
      <aside className="order">
        <h1>Order</h1>
        {this.props.isSelected ? menu_counter : <h2>메뉴를 선택해 주세요!</h2>}
        <button
          className="order-btn"
          disabled={this.props.isSelected ? '' : 'disabled'}
          onClick={this.handleOrder}>주문 하기</button>
      </aside>
    );
  }
}

Order.defaultProps = {
  menu: {
    menu_name: '',
    price: ''
  }
};

Order.propTypes = {
  menu: React.PropTypes.object
};
