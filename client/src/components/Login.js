import { useState } from 'react'


function Login(props) {

    const [usernameRegistration, setUsernameReg] = useState("")
    const [passwordRegistration, setPasswordReg] = useState("")
    const [firstnameRegistration, setFirstnameReg] = useState("")
    const [lastnameRegistration, setLastnameReg] = useState("")
    const [emailRegistration, setEmailReg] = useState("")
    const [user, setUser] = useState({})

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = () => {
        fetch("http://localhost:8080/api/v1/user/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
            .then(result => {
                localStorage.setItem('jsonwebtoken', result.token)

                console.log(result)
            })
    }

    return (
        <div className="login-page">
            <div className="login">
                <h3>Login</h3>
                <input className="input-fields" onChange={handleOnChange} name="username" type="text" placeholder="Username..."></input>
                <input className="input-fields" onChange={handleOnChange} name="password" type="text" placeholder="Password..."></input>
                <br></br>
                <button type="submit" onClick={handleLogin}>Login</button>
            </div>

            <br></br>
        </div>
    )
}

export default Login

