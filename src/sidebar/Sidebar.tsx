import React from 'react';
import './sidebar.css';
import AboutMe from '../assets/images/aboutMe.jpg'

export function Sidebar() {
    return (<div className={'sidebar'}>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className={'sidebarImg'}
                    src={AboutMe}
                     alt='aboutMe'
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in nulla mi.
                    Aenean vitae sem tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                    per inceptos himenaeos.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
<div className="sidebarSocial">
    <i className="sidebarIcon fab fa-facebook-square"/>
    <i className="sidebarIcon fab fa-twitter-square"/>
    <i className="sidebarIcon fab fa-pinterest-square"/>
    <i className="sidebarIcon fab fa-instagram-square"/>
</div>

            </div>

        </div>
    );
}

