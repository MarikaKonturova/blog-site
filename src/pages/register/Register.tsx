import React from 'react';
import './register.css';
import {Link} from "react-router-dom";

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
                <Link to={'/login'} className={'link'}>
                    <button className="registerLoginButton">Login</button>
                </Link>
            </form>
        </div>
    );
}

