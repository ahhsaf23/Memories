import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
    return (
        <div className="register">
            <div className="registerContainer">
                <span className="registerTitle">Register</span>
                <form className="registerForm">
                    <label>Username</label>
                    <input type="text" placeholder="Enter Username" />
                    <label>Email</label>
                    <input type="text" placeholder="Enter Your Email" />
                    <label>Pasword</label>
                    <input type="password" placeholder="Enter your password"/>
                    <button className="registerButton">Register</button>
                </form>
            </div>
            <button className="loginButton"><Link className="link" to="/login">Login</Link></button>
        </div>
    )
}
