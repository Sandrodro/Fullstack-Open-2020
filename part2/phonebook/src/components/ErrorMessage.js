import React from 'react';

const ErrorMessage = ({ persons }) => {
    const approveStyle = {
        display: "flex",
        "align-items": "center",
        color: "green",
        border: "2px solid green",
        "border-radius": "5px",
        width: "40%",
        height: "50px",

    }

    return (
        <div style={approveStyle}>
            <h3>{persons.length > 0 ? ` Added ${persons[persons.length - 1].name}` : null}</h3>
        </div>
    )
}

export default ErrorMessage;