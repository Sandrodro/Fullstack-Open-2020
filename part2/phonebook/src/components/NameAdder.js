import React, { useState } from "react";

const NameAdder = ({ addName, handleName, newName, handleNewNum, newNum }) => {
    return (
        <>
            <h2>Add a new name</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input
                        onChange={handleName}
                        value={newName} />
                </div>
                <div>
                    number: <input
                        onChange={handleNewNum}
                        value={newNum} />
                </div>
                <div>
                    <button
                        type="submit"
                        onSubmit={addName}>add</button>
                </div>
            </form>
        </>
    )
}

export default NameAdder;