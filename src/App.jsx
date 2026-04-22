import React, { useState } from "react";

function App() {
  const [showPlants, setShowPlants] = useState(false);

  return (
    <div className="background-image">
      <h1>Paradise Nursery</h1>
      {!showPlants ? (
        <button onClick={() => setShowPlants(true)}>
          Get Started
        </button>
      ) : (
        <h2>Plants Page Coming Soon</h2>
      )}
    </div>
  );
}

export default App;
