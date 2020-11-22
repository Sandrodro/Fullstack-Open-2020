import React, { useState } from "react";

const Display = ({ persons, newSearch, handleDelete }) => {
    return (
        <>
            <h2>Numbers</h2>
            {
                persons.filter(item => item.name.toLowerCase().includes(newSearch.toLowerCase()))
                    .map(item => <p>{item.name} {item.number}
                        <button
                            onClick={handleDelete}
                            name={item.name}>delete</button></p>)
            }
        </>
    )
}

export default Display;