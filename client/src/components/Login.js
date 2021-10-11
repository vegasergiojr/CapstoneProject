import React from 'react'

function Login() {
    return (
        <div className="login-page">
            <div className="login">
                <h3>Login</h3>
                <input className="input-fields" name="username" type="text" placeholder="username..."></input>
                <input className="input-fields" name="password" type="text" placeholder="password..."></input>
                <button type="submit">Login</button>
            </div>
            <div className="register">
                <h3>Register</h3>
                <input className="input-fields" type="text" placeholder="First Name"></input>
                <input className="input-fields" type="text" placeholder="Last Name"></input>
                <input className="input-fields" type="text" placeholder="username"></input>
                <input className="input-fields" type="text" placeholder="Email"></input>
                <input className="input-fields" tpye="password" placeholder="password"></input>
                <input className="input-fields" type="password" placeholder="password"></input>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Login