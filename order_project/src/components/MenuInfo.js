import React from 'react';

const MenuInfo = (props) => {
  return(
    <article>
      <h1 onClick={props.onClick}>{props.menu.menu_name}</h1>
      <p>
        <span className="chef-name">{props.menu.chef_name}</span>
        <span className="price">{props.menu.price}원</span>
      </p>
      <p className="menu-desc">
        <span>Description</span>
        {props.menu.menu_description}
      </p>
    </article>
  );
};

export default MenuInfo;
