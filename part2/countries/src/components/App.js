import React, { useEffect, useState } from "react";
import axios from "axios";
import Display from "./Display"

const App = () => {

    const [newSearch, setNewSearch] = useState("");
    const [number, setNumber] = useState("");
    const [countriesToShow, setCountriesToShow] = useState();
    const [city, setCity] = useState();
    const [fetched, setFetched] = useState(false);
    const [weather, setWeather] = useState(0);

    const handleSearch = (e) => {
        setNewSearch(e.target.value);
    }

    const showDeets = (e) => {
        e.preventDefault();
        let toShow = e.target.getAttribute('id');
        let city = e.target.getAttribute("capital")
        let country = countriesToShow.filter(item => item.name == toShow);
        setCountriesToShow(country);
        setNumber(1);
        if (countriesToShow) {
            setCity(city);
        }
    }

    useEffect(
        () => {
            let data;
            axios
                .get("https://restcountries.eu/rest/v2/all")
                .then(response => {
                    data = response.data.filter(item => item.name.toLowerCase().includes(newSearch.toLowerCase()))
                })
                .then(() => {
                    setCountriesToShow(data)
                    setFetched(true)
                    setNumber(data.length)
                })
        }, [newSearch]
    )

    useEffect(
        () => {
            let params = {
                params: {
                    access_key: process.env.REACT_APP_API_KEY
                }
            }
            if (city) {
                axios.get(`http://api.weatherstack.com/current?query=${city}`, params)
                    .then((res) => {
                        return res.data.current.temperature
                    })
                    .then((res) => {
                        setWeather(res);
                        return res;
                    })
                    .then((res) => {
                        console.log(weather, res)
                    })
            }
        }
        , [city]
    )

    return (
        <div>
            <p>find countries: <input
                onChange={handleSearch}
                value={newSearch}
            /></p>
            <Display
                countriesToShow={countriesToShow}
                newSearch={newSearch}
                fetched={fetched}
                number={number}
                showDeets={showDeets}
                setCity={setCity}
                city={city} />
        </div>
    )
}

export default App;