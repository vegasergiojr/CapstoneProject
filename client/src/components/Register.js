import React, { useState } from 'react'
import { useHistory } from 'react-router'

export default function Register() {

    const [user, setUser] = useState({

        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: ""

    })

    const history = useHistory()

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    //handles the sumbission of a new user
    const handleRegister = () => {
        fetch('http://localhost:8080/api/v1/users/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'

            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name
            })
        }).then(response => response.json())
            .then(result => {
                localStorage.setItem('jsonwebtoken', result.token)
                history.push('/')
                console.log(result)
            })
    }

    return (
        <div>
            <div className="register">
                <h3>Register</h3>
                <input
                    onChange={handleOnChange} value={user.first_name}
                    className="input-fields" name="first_name" type="text" placeholder="First Name">
                </input>
                <input
                    onChange={handleOnChange} value={user.last_name}
                    className="input-fields" name="last_name" type="text" placeholder="Last Name">
                </input>
                <input
                    onChange={handleOnChange} value={user.username}
                    className="input-fields" name="username" type="text" placeholder="Username">
                </input>
                <input
                    onChange={handleOnChange} value={user.email}
                    className="input-fields" name="email" type="email" placeholder="Email"></input>
                <input
                    onChange={handleOnChange} value={user.password}
                    className="input-fields" name="password" type="password" placeholder="Password">
                </input>
                <br></br>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    )
}
