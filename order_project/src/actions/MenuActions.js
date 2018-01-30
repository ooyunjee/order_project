export const MenuActions = {
  SUCCESSS_GET_MENU_LIST: 'SUCCESSS_GET_MENU_LIST',
}

const successGetMenuList = menuList => ({
  type: MenuActions.SUCCESSS_GET_MENU_LIST,
  menuList,
});

export const getMenuList = () => dispatch => (
  fetch('https://apiv2dev.plating.co.kr/menu/daily?serviceType=DINNER&area=seoul-1&date=2017-07-10')
    .then(response => response.json())
    .then(json => {
      console.log('json', json);
      dispatch(successGetMenuList(json));
    })
    .catch(error => console.warn('getMenuList', error))
);
