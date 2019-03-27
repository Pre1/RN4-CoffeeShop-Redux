import * as actionTypes from "./types";

export const addItemToCart = item => {
  // An item consists of adrink, option and quantity
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  };
};

export const removeItemFromCart = item => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: item
  };
};

export const checkoutCart = () => {
  return {
    type: actionTypes.CHECKOUT
  };
};

// Go to CoffeeDetail
// When the Add button is pressed, the current item (drink + option) should be added to the cart.
// Whenever you add an item, if there is a previous item with the same drink and option already in the cart, you shouldn't add a new item, but instead increase the quantity of the existing one.
// Hint: If you already had a Latte small in the cart and added a new Latte small it should increase the quantity to 2 and not add a new Latte small.
