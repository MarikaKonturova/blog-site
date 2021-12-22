import React, {useContext} from 'react';
import './topbar.css'
import topbarImg from '../../assets/images/topbarImg.jpg'
import {NavLink} from 'react-router-dom';
import {Context} from "../../context/Context";

export function TopBar() {
    const {state, dispatch} = useContext(Context)
    const {user} = state
    const PF = 'http://localhost:3000/images/'
    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }
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
                    <div className="topListItem" onClick={handleLogout}
                    >
                        {user && "LOGOUT"}
                    </div>
                    }
                </div>
            </div>
            <div className={'topRight'}>
                {user ? <NavLink to={'/settings'}>
                        <img className={'topImg'} src={user ? PF + user.profilePic : topbarImg} alt={'user avatar'}/>
                    </NavLink>

                    : (<div className={'topList'}>
                        <div className="topListItem">
                            <NavLink to='/login' activeClassName={'activeClass'} className={'link'}>LOGIN</NavLink>
                        </div>
                        <div className="topListItem">
                            <NavLink to='/register' activeClassName={'activeClass'}
                                     className={'link'}>REGISTER</NavLink>
                        </div>
                    </div>)

                } <i className=" topSearchIcon fas fa-search"/>
            </div>
        </div>
    );
}

