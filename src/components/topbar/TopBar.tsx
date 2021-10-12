import React from 'react';
import './topbar.css'
import topbarImg from '../../assets/images/topbarImg.jpg'
import {NavLink} from 'react-router-dom';

export function TopBar() {
const user = true
    return (
        <div className={'top'}>
            <div className={'topLeft'}>
                <i className="topIcon fab fa-facebook-square"/>
                <i className="topIcon fab fa-twitter-square"/>
                <i className="topIcon fab fa-pinterest-square"/>
                <i className="topIcon fab fa-instagram-square"/>
            </div>
            <div className={'topCenter'}>
                <div className="topList">
                    <div className="topListItem">
                        <NavLink to='/' activeClassName={'activeClass'} className={'link'}>HOME</NavLink>
                    </div>
                    <div className="topListItem">
                        <NavLink to='/' activeClassName={'activeClass'} className={'link'}>ABOUT</NavLink>
                    </div>
                    <div className="topListItem">
                        <NavLink to='/' activeClassName={'activeClass'} className={'link'}>CONTACT</NavLink>
                    </div>
                    {user && <div className="topListItem">
                        <NavLink to='/write' activeClassName={'activeClass'} className={'link'}>WRITE</NavLink>
                    </div>
                    }
                    {user &&
                    <div className="topListItem">
                        <NavLink to='/login' activeClassName={'activeClass'} className={'link'}>LOGOUT</NavLink>
                    </div>
                    }
                </div>
            </div>
            <div className={'topRight'}>
                {user ?
                    <img className={'topImg'} src={topbarImg} alt={'positive image'}/>
                    : (<div className={'topList'}>
                            <div className="topListItem">
                                <NavLink to='/login' activeClassName={'activeClass'} className={'link'}>LOGIN</NavLink>
                            </div>
                            <div className="topListItem">
                                <NavLink to='/register' activeClassName={'activeClass'} className={'link'}>REGISTER</NavLink>
                            </div>
                        </div>
                    )
                } <i className=" topSearchIcon fas fa-search"/>
            </div>
        </div>
    );
}

