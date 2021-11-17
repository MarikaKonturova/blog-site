import React from 'react';
import './settings.css';
import {Sidebar} from "../../components/sidebar/Sidebar";
import pp from '../../assets/images/topbarImg.jpg'

export function Settings() {
    return (
        <div className={'settings'}>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={pp} alt={'profile picture'}/>
                        {/*display: flex in css doesn't work*/}
                        <label htmlFor={'fileInput'}><i style={{display: 'flex'}} className="settingsPPIcon far fa-user-circle"/></label>
                        <input type="file" id={'fileInput'} style={{display: 'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={"Username"}/>
                    <label>Email</label>
                    <input type="email" placeholder={"email@email.com"}/>
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Submit</button>
                </form>
            </div>
            <Sidebar/>

        </div>
    );
}

