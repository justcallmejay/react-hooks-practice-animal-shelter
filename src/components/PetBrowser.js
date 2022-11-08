import React from "react";

import Pet from "./Pet";

function PetBrowser( { filterPets } ) {
  
  return <div className="ui cards">
    {filterPets.map(pet => 
    <Pet pet={pet} key={pet.id}/>)}
    </div>;
}

export default PetBrowser;