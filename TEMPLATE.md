# App

<!-- import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters />
          </div>
          <div className="twelve wide column">
            <PetBrowser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; -->

# Filter

<!-- import React from "react";

function Filters() {
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type">
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters; -->

# Pet

<!-- import React from "react";

function Pet() {
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          PET NAME
        </span>
        <div className="meta">
          <span className="date">PET TYPE</span>
        </div>
        <div className="description">
          <p>Age: PET AGE</p>
          <p>Weight: PET WEIGHT</p>
        </div>
      </div>
      <div className="extra content">
        <button className="ui disabled button">Already adopted</button>
        <button className="ui primary button">Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet; -->

# PetBrowser

<!-- import React from "react";

import Pet from "./Pet";

function PetBrowser() {
  return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>;
}

export default PetBrowser; -->