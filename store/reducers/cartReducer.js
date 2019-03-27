import * as actionTypes from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let addedItem = action.payload;
      let itemExist = state.items.find(
        elm => elm.drink === addedItem.drink && elm.option === addedItem.option
      );

      console.log("itemExist value => ", itemExist);
      let addRes = [];
      if (itemExist) {
        itemExist.quantity++;
        console.log("itemExist");
        addRes = [...state.items];
      } else {
        console.log("item dosen't Exist");
        addRes = [...state.items, action.payload];
      }

      return {
        ...state,
        items: addRes
      };
    case actionTypes.REMOVE_ITEM:
      let item = action.payload;
      console.log("BEFORE remove: ", state.items);
      let res = state.items.filter(elm => elm !== item);
      return {
        ...state,
        items: res
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
