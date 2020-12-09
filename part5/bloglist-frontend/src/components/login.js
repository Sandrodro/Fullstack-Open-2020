import React from "react";

const LoginForm = ({ userName, setUserName, password, setPassword, handleLogin }) => {
    return (
        <form onSubmit={handleLogin}>
            <div>
                username:
                <input
                    type="text"
                    name="Username"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}>
                </input>
            </div>
            <div>
                password:
                <input
                    type="password"
                    name="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}>
                </input>
            </div>
            <div>
                <button
                    type="submit">Submit</button>
            </div>
        </form>
    )
}

export default LoginForm;