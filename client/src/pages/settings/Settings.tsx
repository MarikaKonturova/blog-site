import React, {useContext, useEffect, useState} from 'react';
import './settings.css';
import {Sidebar} from "../../components/sidebar/Sidebar";
import pp from '../../assets/images/topbarImg.jpg'
import {Context} from "../../context/Context";
import axios from "axios";
import {Redirect} from "react-router-dom";

type userUpdateType = {
    username: string
    email: string
    password: string
    id: string
    profilePic?: string
}

export function Settings() {
    const {state, dispatch} = useContext(Context)
    const {user} = state
    const [file, setFile] = useState<File>()
    const [username, setUsername] = useState(user ? user.username : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
   const PF = 'http://localhost:3000/images/'

    const handleImageChange = ({currentTarget: {files}}: React.ChangeEvent<HTMLInputElement>) => {
        if (files && files.length) {
            setFile(files[0]);
        }
    }
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_START'})
        const userId = user ? user._id : ''
        const updatedUser: userUpdateType = {
            username, email, password, id: userId
        }
        if (file) {
            const data = new FormData();
            const filename = `${Date.now()}`;
            data.append('name', filename)
            data.append('file', file);
            updatedUser.profilePic = filename
            try {
                await axios.post('/upload', data)

            } catch (err) {
                console.log(err)
            }
        }
        try {
            const res = await axios.put(`/users/${userId}`, updatedUser)
            console.log(res)
            if (res.data) {
                setSuccess(true)
                dispatch({type:'UPDATE_SUCCESS', user: res.data})
            }
        } catch (err) {
            dispatch({type: 'UPDATE_ERROR'})
        }

    }
    if (!user) {
        return <Redirect to={'/'}/>
    }
    return (
        <div className={'settings'}>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={file ? URL.createObjectURL(file) : user && user.profilePic ? PF+user.profilePic : pp}
                             alt={'profile picture'}/>
                        <label htmlFor={'fileInput'}><i style={{display: 'flex'}}
                                                        className="settingsPPIcon far fa-user-circle"/></label>
                        <input type="file" id={'fileInput'} style={{display: 'none'}} onChange={handleImageChange}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={"Username"} name={'username'} value={username}
                           onChange={(e) => setUsername(e.currentTarget.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder={"email@email.com"} name={'email'} value={email}
                           onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <label>Password</label>
                    <input type="password" name={'password'} onChange={(e) => setPassword(e.currentTarget.value)}/>
                    <button className="settingsSubmit">Submit</button>
                </form>
                {success && <span style={{color: "green", textAlign: "center", marginTop: "20px"}}>Profile has been updated...</span>}
            </div>
            <Sidebar/>

        </div>
    );
}

