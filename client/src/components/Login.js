import React from 'react'

function Login() {
    return (
        <div className="login-page">
            <input type="text" placeholder="username..."></input>
            <input type="text" placeholder="password..."></input>
            <button type="submit">Login</button>
        </div>
    )
}

export default Login