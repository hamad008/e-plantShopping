import React, { useState } from "react";

function CartItem() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Aloe Vera",
      price: 20,
      quantity: 1,
      image: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 25,
      quantity: 2,
      image: "https://via.placeholder.com/100"
    }
  ]);

  const increaseQty = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setItems(
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total Cost: ${item.price * item.quantity}</p>

          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}

      <h3>Total Cart Amount: ${totalAmount}</h3>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
