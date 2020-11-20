import React, { useEffect } from "react";
import axios from "axios"

const DetailView = ({ countriesToShow, number }) => {
    return (
        number > 0 && countriesToShow[0] ? (
            <div>
                <h1>{countriesToShow[0].name}</h1>
                <p>capital {countriesToShow[0].capital}</p>
                <p>population {countriesToShow[0].population}</p>
                <h3>languages</h3>
                <ul>
                    {countriesToShow[0].languages.map(item =>
                        <li>
                            {item.name}
                        </li>)}
                </ul>
                <img src={countriesToShow[0].flag}
                    width="300"
                    height="200" />
                <h3>Weather in {countriesToShow[0].capital}</h3>
                <p><strong>temperature: </strong> </p>
            </div>) : null
    )
}

export default DetailView;