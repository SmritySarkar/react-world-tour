import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) =>{
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }


return(
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
        <h4 style={{color: visited ? 'purple' : 'white'}}>Country Name : {name.common}</h4>
        <img src={flags.png} alt={flags.alt} />
        <p>Population : {population}</p>
        <p>Area : {area}</p>
        <p><small>Code: {cca3}</small></p>
        <button onClick={() =>
        handleVisitedCountry(country)}>Mark visited</button>
        <br />
        <button onClick={() => handleVisitedFlags(country.flags.png)}>Add flag</button>
        <br />
        <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
        {
            visited ? 'I have visited this country!' : 'I want to visit'
        }
    </div>
);
};

export default Country;