import { MenuActions } from "../actions/MenuActions";

const initialState = {
  menuList: null,
};

const MenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MenuActions.SUCCESSS_GET_MENU_LIST: {
      const { menuList } = action;
      return Object.assign({}, state, {
        menuList,
      });
    }
    default:
      return state;
  }
}

export default MenuReducer;
