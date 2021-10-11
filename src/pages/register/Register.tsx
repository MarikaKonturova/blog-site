import React from 'react';
import './register.css';

export function Register() {
    return (
        <div className={'register'}>
            <form className="registerForm">
                <span className="registerTitle">Register</span>
                <label>Username</label>
                <input type="text" placeholder={'Enter your username...'} className={'registerInput'}/>

                <label>Email</label>
                <input type="text" placeholder={'Enter your email...'} className={'registerInput'}/>
                <label>Password</label>
                <input type="text" placeholder={'Enter your password...'} className={'registerInput'}/>
                <button className="registerButton">Register</button>
                <button className="registerLoginButton">Login</button>
            </form>
        </div>
    );
}

