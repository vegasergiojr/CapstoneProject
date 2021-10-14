import React from 'react';


function Login() {
    return (
        <div className="login-page">
            <div className="login">
                <h3>Login</h3>
                <input className="input-fields" name="username" type="text" placeholder="Username..."></input>
                <input className="input-fields" name="password" type="text" placeholder="Password..."></input>
                <br></br>
                <button type="submit">Login</button>
            </div>

            <br></br>

            <div className="register">
                <h3>Register</h3>
                <input className="input-fields" name="first_name" type="text" placeholder="First Name"></input>
                <input className="input-fields" name="last_name" type="text" placeholder="Last Name"></input>
                <input className="input-fields" name="email" type="text" placeholder="Username"></input>
                <input className="input-fields" name="username" type="text" placeholder="Email"></input>
                <input className="input-fields" name="password" type="password" placeholder="Password"></input>
                <input className="input-fields" type="password" placeholder="Password"></input>
                <br></br>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Login

