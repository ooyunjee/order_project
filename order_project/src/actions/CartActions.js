export const CartActions = {
  ADD_CART: 'ADD_CART',
}

export const addCart = addedMenu => ({
  type: CartActions.ADD_CART,
  addedMenu,
});

// export const addCart = () => dispatch => (
//   fetch('https://apiv2dev.plating.co.kr/menu/daily?serviceType=DINNER&area=seoul-1&date=2017-07-10')
//     .then(response => response.json())
//     .then(json => {
//       console.log('json', json);
//       dispatch(successGetMenuList(json));
//     })
//     .catch(error => console.warn('getMenuList', error))
// );
