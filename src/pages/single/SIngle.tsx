import React from 'react';
import './single.css';
import {Sidebar} from "../../components/sidebar/Sidebar";
import {SinglePost} from "../../components/singlePost/SinglePost";

export function Single() {
    return (<div className={'single'}>
            <SinglePost/>
            <Sidebar/>
        </div>
    );
}

