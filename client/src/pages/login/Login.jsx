import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
        <div className="login">
            <div className="loginContainer">
                <span className="loginTitle">Login</span>
                <form className="loginForm">
                    <label>Email</label>
                    <input type="text" placeholder="Enter Your Email" />
                    <label>Pasword</label>
                    <input type="password" placeholder="Enter your password"/>
                    <button className="loginButton1">Login</button>
                </form>
            </div>
            <button className="registerButton1"><Link className="link" to="/register">Register</Link></button>
        </div>
    )
}
