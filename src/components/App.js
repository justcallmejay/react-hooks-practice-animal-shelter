import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

useEffect(() => {
  fetch('http://localhost:3001/pets')
  .then(res => res.json())
  .then(res => setPets(res))
}, [])

const filterPets = pets.filter(pet => {
  if (filters.type === "all") return true;

  return pet.type === filters.type
})

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters setFilters={setFilters}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser filterPets={filterPets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
