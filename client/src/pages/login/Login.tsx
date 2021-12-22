import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './login.css';
import {Context} from "../../context/Context";
import axios from "axios";

export function Login() {
    const {dispatch, state} = useContext(Context)
    const {isFetching} = state
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch({type: 'LOGIN_START'});
        try {
            const target = e.target as typeof e.target & {
                username: { value: string };
                password: { value: string };
            };
            const username = target.username.value;
            const password = target.password.value;
            const res = await axios.post('/auth/login', {username,password})
            dispatch({type: 'LOGIN_SUCCESS', user:res.data});


        } catch (err) {
            dispatch({type: 'LOGIN_ERROR'});
        }
    }
    return (
        <div className={'login'}>
            <form className="loginForm" onSubmit={handleSubmit}>
                <span className="loginTitle">Login</span>
                <label>Username</label>
                <input name={'username'} type="text" placeholder={'Enter your username...'} className={'loginInput'}/>
                <label>Password</label>
                <input name={'password'} type="text" placeholder={'Enter your password...'} className={'loginInput'}/>
                <button className="loginButton" type={'submit'} disabled={isFetching}>Login</button>
                <Link to={'/register'} className={'link'}>
                    <button className="loginRegisterButton">Register</button>
                </Link>
            </form>
        </div>
    );
}

