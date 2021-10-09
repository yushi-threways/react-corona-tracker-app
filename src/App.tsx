import countriesJson from "./countries.json";
import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import TopPage from './pages/TopPage';
import WorldPage from "./pages/WorldPage";
import './App.css';

function App() {

  const [country, setCountry] = useState<string>("");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecovered:  0,
  });

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
    .then(res => res.json())
    .then(data => {
      setCountryData({
        date: data[data.length -1].Date,             
        newConfirmed: data[data.length -1].Confirmed - data[data.length -2].Confirmed,      
        totalConfirmed: data[data.length -1].Confirmed,    
        newRecovered:  data[data.length -1].Recovered- data[data.length -2].Recovered,    
        totalRecovered: data[data.length -1].Recovered,    
      })
    })
    }

  const [allCountriesData, setAllCountriesData] = useState<any[]>([]);

  useEffect(() => {
      fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
  }, []);

  return (
    <BrowserRouter>
      <Switch>
      {/* https://reactrouter.com/web/guides/quick-start */}
        <Route exact path="/">
          <div>
            <TopPage 
              countriesJson={countriesJson} 
              setCountry={setCountry} 
              getCountryData={getCountryData}
              countryData={countryData}
            />
        </div>
        </Route>
        <Route exact path="/world">
          <WorldPage
            allCountriesData={allCountriesData}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
