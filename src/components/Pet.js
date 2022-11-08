import React, { useState } from "react";

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

export default Pet;
