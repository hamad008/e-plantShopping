import React, { useState } from "react";

const plants = [
  // Category 1
  { id: 1, name: "Aloe Vera", price: 20, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Snake Plant", price: 25, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Peace Lily", price: 30, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Spider Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Fern", price: 18, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Rubber Plant", price: 22, category: "Indoor", image: "https://via.placeholder.com/150" },

  // Category 2
  { id: 7, name: "Rose", price: 10, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Tulip", price: 12, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Sunflower", price: 14, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Daisy", price: 11, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 11, name: "Lavender", price: 16, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 12, name: "Hibiscus", price: 20, category: "Outdoor", image: "https://via.placeholder.com/150" },

  // Category 3
  { id: 13, name: "Cactus", price: 8, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 14, name: "Aloe Mini", price: 9, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 15, name: "Echeveria", price: 10, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 16, name: "Jade Plant", price: 13, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 17, name: "Zebra Plant", price: 11, category: "Succulent", image: "https://via.placeholder.com/150" },
  { id: 18, name: "Burro’s Tail", price: 14, category: "Succulent", image: "https://via.placeholder.com/150" }
];

function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant.id]);
  };

  return (
    <div>
      <h2>Plants</h2>
      <h3>Cart: {cart.length}</h3>

      {["Indoor", "Outdoor", "Succulent"].map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter((p) => p.category === category)
            .map((plant) => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <p>{plant.name}</p>
                <p>${plant.price}</p>

                <button
                  disabled={cart.includes(plant.id)}
                  onClick={() => addToCart(plant)}
                >
                  {cart.includes(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
