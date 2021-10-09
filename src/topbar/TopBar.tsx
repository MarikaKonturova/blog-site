import React from 'react';
import './topbar.css'
import topbarImg from '../assets/images/topbarImg.jpg'
export function TopBar() {
    return (
        <div className={'top'} >
            <div className={'topLeft'}>
                <i className="topIcon fab fa-facebook-square"/>
                <i className="topIcon fab fa-twitter-square"/>
                <i className="topIcon fab fa-pinterest-square"/>
                <i className="topIcon fab fa-instagram-square"/>
            </div>
            <div className={'topCenter'}>
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className={'topRight'}>
                <img className={'topImg'} src={topbarImg} alt={'positive image'}/>
                <i className=" topSearchIcon fas fa-search"/>
            </div>
        </div>
    );
}

