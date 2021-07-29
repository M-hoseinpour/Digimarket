import React, {useState} from 'react'
import "./login.css"
import { auth } from '../firebase'
import { Link, useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory();
    const [eye, setEye] = useState("fas fa-eye")
    const [type, setType] = useState("password")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) =>  {
            history.push("/");
        })
        .catch(e => alert(e.message))
    }
    
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            history.push("/");
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className='login'>
            <div className='login-section'>
                <Link to='/Digimarket'>
                    <h1>Digimarket</h1>
                </Link>
                <form>
                    <h6>E-mail:</h6>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                    <h6>Password:</h6>
                    <input type={type} value={password} onChange={e => setPassword(e.target.value)}></input>
                    <a onClick={() => (type ==="password"? setType('text') : setType("password"))}>
                        <i class={eye} onClick={() => (eye ==="fas fa-eye"? setEye('fa fa-eye-slash') : setEye("fas fa-eye") )}></i>
                    </a>
                    <button type='submit' onClick={login}>Sign In</button>
                    <div className='create'>
                        <small>
                        By continuing, you agree to Digimarket's Conditions of Use and Privacy Notice.
                        </small>
                        <button onClick={register}>Create Account</button>
                    </div>
                </form>
                
            </div>

        </div>
    )
}

export default Login
