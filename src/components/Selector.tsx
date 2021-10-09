import { ReactChild, ReactFragment, ReactPortal, Key } from "react";

const Selector = (props:any) => {
    return (
        <div className="selector-container">
           <select onChange={(e: any) => props.setCountry(e.target.value)}>
               <option>Select A Country</option>
               {props.countriesJson.map((country: { Slug: string | number | readonly string[] | undefined; Country: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) =>
                   <option key={index} value={country.Slug}>{country.Country}</option>
                )}
           </select>
           <button onClick={props.getCountryData}>Get Data</button>
        </div>
    )
}

export default Selector;