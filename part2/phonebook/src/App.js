import React, { useState, useEffect } from 'react';
import Search from "./components/Search";
import Display from "./components/Display";
import NameAdder from "./components/NameAdder";
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


        const newPerson = {
            name: newName,
            number: newNum,
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
        let found = persons.find(item => item.name === name);
        console.log(found.id)
        personService.deleter(found.id)
            .then(() => personService.get()
                .then(res => setPersons(res.data)))
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
            .then(response => {
                setPersons(response.data)
            })
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