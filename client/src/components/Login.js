import { useState } from 'react'
import jwtDecode from 'jwt-decode'
import { connect } from 'react-redux';

function Login(props) {

    const [user, setUser] = useState({})

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = () => {
        fetch("http://localhost:8080/api/v1/users/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
            .then(result => {
                const decodedToken = jwtDecode(result.token)
                console.log(decodedToken)
                localStorage.setItem('jsonwebtoken', result.token)
                localStorage.setItem('username', decodedToken.username)
                localStorage.setItem('user_id', decodedToken.user_id)
                props.history.push('/home')
                props.onLoggedIn()
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

const mapDispatchToProps =(dispatch) => {
    return {
        onLoggedIn: () => dispatch({type: 'LOGGED_IN'})
    }
}

export default connect(null, mapDispatchToProps)(Login)

