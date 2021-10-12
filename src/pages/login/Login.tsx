import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export function Login() {
    return (
        <div className={'login'}>
            <form className="loginForm">
                <span className="loginTitle">Login</span>
                <label>Email</label>
                <input type="text" placeholder={'Enter your email...'} className={'loginInput'}/>
                <label>Password</label>
                <input type="text" placeholder={'Enter your password...'} className={'loginInput'}/>
                <button className="loginButton">Login</button>
                <Link to={'/register'} className={'link'}>
                    <button className="loginRegisterButton">Register</button>
                </Link>
            </form>
        </div>
    );
}

