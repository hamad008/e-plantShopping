import React, { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";

function App() {
  const [showPlants, setShowPlants] = useState(false);

  return (
    <div className="background-image">
      <h1>Paradise Nursery</h1>

      {!showPlants ? (
        <div>
          <p>
            Welcome to Paradise Nursery, your destination for beautiful indoor
            and outdoor plants.
          </p>
          <button onClick={() => setShowPlants(true)}>Get Started</button>
          <AboutUs />
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
