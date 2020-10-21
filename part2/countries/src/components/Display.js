import React from 'react';

const Display = ({ country }) => {
    console.log('display: ', country);

    return (
        <div>
            {country
                ?
                    <>
                        <h2>{country.name}</h2>
                        <p>capital: {country.capital}</p>
                        <p>population: {country.population}</p>
                        <h3>Spoken languages</h3>
                        <ul>
                            {country.languages.map(language => 
                                <li key={language.name}>{language.name}</li>
                            )}
                        </ul> 
                        <img src={country.flag} style={{ width: "150px", height: "100px" }} />

                        <h3>Wheather in {country.name}</h3>
                        
                    </>
                : null
            }
        </div>    
    );
}

export default Display;