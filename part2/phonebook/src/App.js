import React, { useState, useEffect } from 'react';
import Search from "./components/Search";
import Display from "./components/Display";
import NameAdder from "./components/NameAdder";
import axios from "axios";
import personService from "./services/persons";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
    const [persons, setPersons] = useState([])

    const [newName, setNewName] = useState('');
    const [newNum, setNewNum] = useState('');
    const [newSearch, setNewSearch] = useState('')
    const [showNotification, setShowNotification] = useState(false);

    const addName = (e) => {
        e.preventDefault();

        let alreadyOnList = persons.some(item => item.name == newName);
        alreadyOnList == true ? alert(`${newName} is already on the list`) :
            setPersons(persons.concat({
                name: newName,
                number: newNum,
                key: newName,
            }))

        const newPerson = {
            name: newName,
            number: newNum,
            key: newName
        }
        personService.create(newPerson)
            .then(res => {
                setPersons(persons.concat(res.data))
                setNewName("")
                setNewNum("")
            });
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 2000)
    }

    const handleDelete = (e) => {
        let name = e.target.getAttribute("name");
        window.confirm(`Delete ${name} ?`)
        let returned = axios.get("http://localhost:3001/persons")
            .then(res => res.data)
            .then(res => res.find(item => item.name == name))
            .then(res => {
                personService.deleter(res.id)
                    .then(() => {
                        axios.get("http://localhost:3001/persons")
                            .then((res) => setPersons(res.data))
                    })
            })
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
        personService.get()
            .then(response => setPersons(response.data))
    }, []);

    return (
        <div>
            <h1>Phonebook</h1>
            {showNotification ?
                <ErrorMessage
                    persons={persons} /> : null}
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
                newSearch={newSearch}
                handleDelete={handleDelete} />
        </div>
    )
}

export default App