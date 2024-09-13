/*import { useState } from "react";
import BookStoreContext from "./bookStorContext";

const BookStoreProvider = ({ children }) => {
  const [cartInfo, setCartInfo] = useState([]);

  // Handle Add To Cart
  const addToCart = (item, qty) => {
    const newCartItem = {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      quantity: qty,
      author: item.author,
    };

    const isExist = cartInfo.find((cart) => cart.id === newCartItem.id);

    if (isExist) {
      setCartInfo(
        cartInfo.map((cart) =>
          cart.id === newCartItem.id ? newCartItem : cart
        )
      );
    } else {
      setCartInfo((prev) => [...prev, newCartItem]);
    }
  };

  // Handle Remove From Cart
  const removeFromCart = (id) => {
    const cart = cartInfo.filter((c) => c.id !== id);
    setCartInfo(cart);
  };
  return (
    <BookStoreContext.Provider
      value={{
        cartInfo,
        addToCart,
        removeFromCart,
        cartInfoLength: cartInfo.length,
      }}
      
    >
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreProvider;*/
import { useState } from "react";
import BookStoreContext from "./bookStorContext";

const BookStoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Handle Add To Cart
  const addToCart = (item) => {
   /* console.log(item)
    setCartItems((prev)=>[...prev,item]);
  }*/

    const isExist = cartItems.find((cart) => cart.id === item.id);

    if (isExist) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? item : cartItem
        )
      );
    } else {
      setCartItems((prev) => [...prev, item]);
    }
   /* const newCartItem = {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      quantity: qty,
      author: item.author,
    };

    const isExist = cartItems.find((cart) => cart.id === newCartItem.id);

    if (isExist) {
      setCartItems(
        cartItems.map((cart) =>
          cart.id === newCartItem.id ? newCartItem : cart
        )
      );
    } else {
      setCartItems((prev) => [...prev, newCartItem]);
    }*/
  };
  const removeFromCart = (id) => {
    const cart = cartItems.filter((c) => c.id !== id);
    setCartItems(cart);
  };
  return (
    <BookStoreContext.Provider
    value={{
      cartItems,
      addToCart,
      removeFromCart,
      cartInfoLength: cartItems.length,
    }}
    >
      {children}
    </BookStoreContext.Provider>
  );
};
export default BookStoreProvider;