import Loading from "./Loading";

const Card = ({ allCountriesData, loading }:any) => {
    return (
        <div className="card-container">
            {loading ?
                <Loading />
                :
                <>
                {allCountriesData.map((singleData:any, index:number) =>
                    <div key={index} className="card">
                        <div>
                            <h2>{singleData.Country}</h2>
                            <p>新規感染者：<span>{singleData.NewConfirmed.toLocaleString()}</span></p>
                            <p>感染者総数：<span>{singleData.TotalConfirmed.toLocaleString()}</span></p>
                        </div>
                    </div>
                )}
                </>
            }
        </div>
    );
};

export default Card;