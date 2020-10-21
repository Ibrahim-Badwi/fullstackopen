import React from 'react';

const Persons = ({ persons, handleDeletePerson }) => {
    return (
        <>
            {persons.map(person => 
                <>
                    <li key={person.name}>
                        {person.name}
                        {person.number}
                        <input type="button" value="delete" onClick={() => handleDeletePerson(person)}/>
                    </li>
                </>
            )}
        </>
    );
}

export default Persons;