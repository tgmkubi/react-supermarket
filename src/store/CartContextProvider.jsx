import { useReducer } from "react";
import PropTypes from "prop-types";
import { DUMMY_PRODUCTS } from "../dummy-products.js";
import { CartContext } from "./cart-context.jsx";

const shoppingCartReducer = (state, action) => {
  const { type, payload } = action;

  if (type === "ADD_ITEM") {
    const updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === payload.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (cartItem) => cartItem.id === payload.id
      );
      updatedItems.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      });
    }
    return {
      ...state,
      items: updatedItems,
    };
  }

  if (type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === payload.productId
    );
    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };
    updatedItem.quantity += payload.amount;

    if (updatedItem.quantity === 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
};

export default function CartContextProvider({ children }) {
  const [shoppingCartState, dispatchShoppingCartState] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function handleAddItemToCart(id) {
    dispatchShoppingCartState({
      type: "ADD_ITEM",
      payload: {
        id: id,
      },
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    dispatchShoppingCartState({
      type: "UPDATE_ITEM",
      payload: {
        productId: productId,
        amount: amount,
      },
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItem: handleAddItemToCart,
    updateItem: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.any,
};
