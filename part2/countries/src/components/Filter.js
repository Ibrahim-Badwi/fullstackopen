import React from 'react';

const Filter = ({ value, countries , handleDisplayCountry, handleFilterChange }) => {
    const filteredCountries = countries.filter(country => country.name.toLowerCase().startsWith(value));

    (filteredCountries.length === 1)
        ? handleDisplayCountry(filteredCountries[0])
        : handleDisplayCountry("")


    return (
        <>
            <div>
                find countries <input value={value} onChange={handleFilterChange} />
                <div>
                    { filteredCountries.length > 11 
                        ? <p>Too many matches, specify another filter</p>
                        : filteredCountries.map(country => 
                            <>
                                <p key={country.name}>{country.name}</p>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Filter;