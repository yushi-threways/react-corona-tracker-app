import './App.css';
import countriesJson from "./countries.json";
import { useState } from "react";
import TopPage from './pages/TopPage';
import Results from './components/Results';

function App() {

  const [country, setCountry] = useState<string>("");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: (0),
    totalConfirmed: "",
    newRecovered: (0),
    totalRecovered:  "",
  });

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
    .then(res => res.json())
    .then(data => {
      setCountryData({
        date: data[data.length - 1].Data,
        newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
        totalConfirmed: data[data.length - 1].Confirmed,
        newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
        totalRecovered:  data[data.length - 1].Recovered
      })
    })
    }

  return (
    <div>
      {console.log(countryData)}
      <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} />
    </div>
  );
}

export default App;
