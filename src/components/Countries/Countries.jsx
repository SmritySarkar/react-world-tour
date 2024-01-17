import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () =>{
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);

    const handleVisitedCountry = country =>{
        console.log('Add this to your visited country');
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return(
        <div>
            <h3>Countries : {countries.length}</h3>
            {/* Visited Countries */}
            <div>
                <h3>Visited Countries : {visitedCountries.length}
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
                </h3>
                <ul>

                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map(( flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            {/* Display Countries */}
            <div className="country-container">
            {
                countries.map( country => <Country 
                    key={country.cca3}
                    handleVisitedFlags = {handleVisitedFlags}
                    handleVisitedCountry = {handleVisitedCountry}
                    country = {country}>
                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;