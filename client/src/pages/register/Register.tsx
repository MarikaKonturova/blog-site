import React, {useState} from 'react';
import './register.css';
import {Link} from "react-router-dom";
import axios, {AxiosRequestConfig} from "axios";
import {userType} from "../../types/typpes";

export function Register() {
    const handleSubmit = async (e : React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            username: { value: string };
            email: { value: string };
            password: { value: string };
        };
        const username = target.username.value;
        const email = target.email.value; // typechecks!
        const password = target.password.value;
        const res = await axios.post<userType>('/auth/register', {
            username ,email,  password
        })
        console.log(res)
    }
    return (
        <div className={'register'}>
            <form className="registerForm" onSubmit={handleSubmit}>
                <span className="registerTitle">Register</span>
                <label>Username</label>
                <input type="text" name={'username'} placeholder={'Enter your username...'}
                        className={'registerInput'}/>
                <label>Email</label>
                <input type="text" name={'email'} placeholder={'Enter your email...'}
                        className={'registerInput'}/>
                <label>Password</label>
                <input type="text" name={'password'} placeholder={'Enter your password...'}
                       className={'registerInput'}/>
                <button className="registerButton">Register</button>
                <Link to={'/login'} className={'link'}>
                    <button className="registerLoginButton" type={'submit'}>Login</button>
                </Link>
            </form>
        </div>
    );
}

