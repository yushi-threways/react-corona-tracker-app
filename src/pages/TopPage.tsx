import Title from '../components/Title';
import Header from '../components/Header';
import Selector from '../components/Selector';
import Results from '../components/Results';

const TopPage = ({ countriesJson, setCountry, getCountryData, countryData, loading }:any) => {
    return (
        <div className="top-page-container">
            <div>
                <Header />
                <Title />
                <Selector countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} />
                <Results countryData={countryData} loading={loading} />
            </div>
        </div>
    )
}

export default TopPage;