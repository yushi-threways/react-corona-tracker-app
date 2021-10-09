import { ReactChild, ReactFragment, ReactPortal, Key } from "react";

const Selector = ({ setCountry, countriesJson }:any) => {
    return (
        <div className="selector-container">
           <select onChange={(e: any) => setCountry(e.target.value)}>
               {countriesJson.map((country: { Slug: string | number | readonly string[] | undefined; Country: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) =>
                   <option key={index} value={country.Slug}>{country.Country}</option>
                )}
           </select>
        </div>
    )
}

export default Selector;