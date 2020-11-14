import React, { useState, useEffect } from 'react';
import Search from "./Search";
import Display from "./Display";
import NameAdder from "./NameAdder";
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([])

    const [newName, setNewName] = useState('');
    const [newNum, setNewNum] = useState('');
    const [newSearch, setNewSearch] = useState('')

    const addName = (e) => {
        e.preventDefault();

        let alreadyOnList = persons.some(item => item.name == newName);
        alreadyOnList == true ? alert(`${newName} is already on the list`) :
            setPersons(persons.concat({
                name: newName,
                number: newNum,
                key: newName,
            }))
    }

    const handleName = (e) => {
        setNewName(e.target.value);
    }

    const handleNewNum = (e) => {
        setNewNum(e.target.value);
    }

    const handleSearch = (e) => {
        setNewSearch(e.target.value);
    }

    useEffect(() => {
        axios.get("http://localhost:3001/persons")
            .then(response => setPersons(response.data))
    }, []);

    return (
        <div>
            <h1>Phonebook</h1>
            <Search
                handleSearch={handleSearch}
                newSearch={newSearch} />
            <NameAdder
                addName={addName}
                handleName={handleName}
                newName={newName}
                handleNewNum={handleNewNum}
                newNum={newNum} />
            <Display
                persons={persons}
                newSearch={newSearch} />
        </div>
    )
}

export default App