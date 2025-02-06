import React, { useCallback, useState } from "react";

const CartItem = React.memo(({ product, onRemove }) => {
  console.log(`Rendering ${product.name}`);
  return (
    <div>
      <span>
        {product.name} - ${product.price}
      </span>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
});

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Shoe", price: 50 },
    { id: 2, name: "Bag", price: 30 },
    { id: 3, name: "Hat", price: 20 },
  ]);

  const removeItem = useCallback((id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} product={item} onRemove={removeItem} />
      ))}
    </div>
  );
};

export default Cart;
