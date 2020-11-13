import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: "577 45-75-02",
            key: "Arto Hellas"
        }
    ])

    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('');

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
        setNewName(e.target.value)
    }

    const handleNewNum = (e) => {
        setNewNum(e.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input onChange={handleName}
                        value={newName} />
                </div>
                <div>
                    number: <input onChange={handleNewNum}
                        value={newNum} />
                </div>
                <div>
                    <button type="submit"
                        onSubmit={addName}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(item => <p>{item.name} {item.number}</p>)}
        </div>
    )
}

export default App