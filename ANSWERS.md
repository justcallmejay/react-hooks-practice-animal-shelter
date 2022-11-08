# App

<!-- import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([])
  const [filters, setFilters] = useState({ type: "all" })
  const [findPet, setFindPet] = useState('')

  console.log(filters)

useEffect(() => {
  fetch('http://localhost:3001/pets')
  .then(res => res.json())
  .then(pets => setPets(pets))
}, [])

console.log(pets)

const filterPets = pets.filter(pet => {
  
  if (filters.type === "all") return true;

  return pet.type === filters.type
})

const findPetName = filterPets.filter(pet => {
  return pet.name.toLowerCase().includes(findPet.toLowerCase())
})

function handlePetInput(e) {
  setFindPet(e.target.value)
}

console.log(filterPets) 
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters setFilters={setFilters} setFindPet={setFindPet} findPet={findPet} handlePetInput={handlePetInput}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser findPetName={findPetName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; -->

# Filters

<!-- import React from "react";

function Filters( { setFilters, findPet, handlePetResult, handlePetInput } ) {
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={(e) => setFilters({ type: e.target.value})}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <input type="text" placeholder="Find pet" value={findPet} onChange={handlePetInput}></input>
        <button className="ui secondary button" onClick={handlePetResult}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters; -->

# Pet

<!-- import React, { useState } from "react";

function Pet( { pet } ) {

  const [adopted, setAdopted] = useState(pet.isAdopted)

  function adoptPet(pet) {
    if (pet.isAdopted === false) {
    console.log(adopted)
    fetch(`http://localhost:3001/pets/${pet.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        isAdopted : true
      })
    })
    .then(res => res.json())
    .then(setAdopted(!adopted))
  }
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          PET NAME: {pet.name} {pet.gender === "female" ? '♀' : '♂'}
        </span>
        <div className="meta">
          <span className="date">PET TYPE: {pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {adopted === true ? 
        (<button className="ui disabled button">Already adopted</button>) :
        (<button className="ui primary button" onClick={() => adoptPet(pet)}>Adopt pet</button>)}
      </div>
    </div>
  );
}

export default Pet; -->

# PetBrowser

<!-- import React from "react";

import Pet from "./Pet";

function PetBrowser({ findPetName }) {
  return <div className="ui cards">
    {findPetName.map(pet => 
    <Pet pet={pet}/>)}
    </div>;
}

export default PetBrowser; -->
