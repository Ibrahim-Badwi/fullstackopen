import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const hook = () => {
    personsService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons);
    })
  };

  useEffect(hook, []);

  const addName = (event) => {
    event.preventDefault();
    let found = false;

    persons.filter((item) => {
      if (item.name === newName) {
        found = true;
      }
    });

    if (found) {
      alert(`${newName} already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber || "",
      };
      personsService
        .create(personObject)
        .then(returnedObject => {
          setPersons(persons.concat(returnedObject));
          setNewName("");
          setNewNumber("");
        })
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
  };

  const handleDeletePerson = person => {
    var proceed = window.confirm(`Delete ${person.name} ?`);
    if (proceed) {
      const newPersons = persons.filter(p => p.id !== person.id);
      personsService
        .remove(person.id)
        .then(returnedObject => console.log(returnedObject))
      setPersons(newPersons);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchTerm} handleChange={handleSearchChange} />
      <h3>Add a new</h3>
      <PersonForm 
        addName={addName} 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDeletePerson={handleDeletePerson} />
    </div>
  );
};

export default App;
