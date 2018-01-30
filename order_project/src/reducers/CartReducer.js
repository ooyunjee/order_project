import { CartActions } from "../actions/CartActions";

const initialState = {
  addedMenu: null,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActions.SUCCESSS_GET_MENU_LIST: {
      const { addedMenu } = action;
      return Object.assign({}, state, {
        addedMenu,
      });
    }
    default:
      return state;
  }
}

export default CartReducer;
