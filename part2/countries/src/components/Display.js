import React from "react";
import DetailView from "./DetailView";

const Display = ({ countriesToShow, newSearch, fetched, number, showDeets }) => {

    const fetcher = newSearch !== "" && fetched === true;
    const dontShow = fetcher && number > 10;
    const showList = fetcher && number <= 10 && number >= 1;
    const showDetails = fetcher && number === 1;

    return (
        <div>
            <>
                {dontShow ? <p>Too many countries, search for another one</p> : null}
                {showList ? countriesToShow.map(item =>
                    <p>
                        {item.name}
                        <button
                            type="button"
                            id={item.name}
                            capital={item.capital}
                            onClick={showDeets}>show</button>
                    </p>) : null}
                {showDetails ? <DetailView
                    countriesToShow={countriesToShow}
                    number={number}
                /> : null}
            </>
        </div>
    )
}

export default Display;