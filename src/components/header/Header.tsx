import React from 'react';
import './header.css';
import large from '../../assets/images/large.jpg'

export function Header() {
    return (<div className={'header'}>
            <div className={'headerTitles'}>
                <span className={'headerTitleSm'} >React & Node</span>
                <span className={'headerTitleLg'}>Blog</span>
            </div>
            <img className={'headerImg'}
            src={large}
            alt={'headerTitleLg'}/>
        </div>
    );
}

