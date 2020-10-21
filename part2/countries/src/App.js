import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Display from "./components/Display";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  
  const hook = (response) => {
    console.log("fetch effect hook");

    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        console.log("countries info fetched");
        setCountries(response.data);
    });
  };

  useEffect(hook, []);

  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
  };

  const handleDisplayCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <Filter 
        value={filterTerm} 
        countries={countries}
        handleDisplayCountry={handleDisplayCountry}
        handleFilterChange={handleFilterChange}
      />
      {selectedCountry 
        ? <Display country={selectedCountry} />
        : null
      }
    </div>
  );
};

export default App;
