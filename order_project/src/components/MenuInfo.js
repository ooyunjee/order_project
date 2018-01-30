import React from 'react';

const MenuInfo = (props) => {
  const { onClick, menu } = props;
  return(
    <article>
      <h1 onClick={onClick}>{menu.menuInformation.name.korean}</h1>
      <p>
        <span className="chef-name">{menu.menuInformation.chefInformation.name}</span>
        <span className="price">{menu.menuInformation.price.default}원</span>
      </p>
      <p className="menu-desc">
        <span>Description</span>
        {menu.menuInformation.story}
      </p>
    </article>
  );
};

export default MenuInfo;
