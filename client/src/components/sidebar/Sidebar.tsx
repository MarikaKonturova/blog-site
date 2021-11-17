import React, {useEffect, useState} from 'react';
import './sidebar.css';
import AboutMe from '../../assets/images/aboutMe.jpg'
import {categoryType} from "../../types/typpes";
import axios from "axios";
import {NavLink} from "react-router-dom";

export function Sidebar() {
    const [cats, setCats] = useState([] as categoryType[])
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/categories')
            setCats(res.data)
        }
        getCats().then()
    }, [])
    return (<div className={'sidebar'}>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
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
                    {cats.map((c, i) =>
                        <NavLink to={`/?cat=${c.name}`} className={"link"}>
                            <li className="sidebarListItem" key={i}>{c.name}</li>

                        </NavLink>
                    )}
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

