import React, { useState } from "react";

const Display = ({ persons, newSearch }) => {
    return (
        <>
            <h2>Numbers</h2>
            {
                persons.filter(item => item.name.toLowerCase().includes(newSearch.toLowerCase()))
                    .map(item => <p>{item.name} {item.number}</p>)
            }
        </>
    )
}

export default Display;