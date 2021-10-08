import { useState } from "react";
import countriesJson from "../countries.json";

const Selector = () => {
    const [country, setCountry] = useState<string>("");

    const getCountryData = () => {
        fetch(`https://api.covid19api.com/country/${country}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
           <select onChange={(e: any) => setCountry(e.target.value)}>
               <option>Select A Country</option>
               {countriesJson.map((country, index) =>
                   <option key={index} value={country.Slug}>{country.Country}</option>
                )}
           </select>
           <button onClick={getCountryData}>Get Data</button>
        </div>
    )
}

export default Selector;