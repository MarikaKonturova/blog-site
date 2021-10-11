import React from 'react';
import { Post } from './post/Post';
import './posts.css';
export function Posts() {
    return (<div className={'posts'}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

