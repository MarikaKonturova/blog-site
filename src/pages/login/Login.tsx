import React from 'react';
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
                <button className="loginRegisterButton">Register</button>
            </form>
        </div>
    );
}

