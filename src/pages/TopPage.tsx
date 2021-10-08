import Title from '../components/Title';
import Header from '../components/Header';
import Selector from '../components/Selector';
import Results from '../components/Results';

const TopPage = (props:any) => {
    return (
        <div>
            <Title />
            <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
            <Results />
        </div>
    )
}

export default TopPage;