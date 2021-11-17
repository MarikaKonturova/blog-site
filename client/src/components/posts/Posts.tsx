import React from 'react';
import {Post} from './post/Post';
import './posts.css';
import {postType} from "../../types/typpes";

type postsProps = {
    posts: postType[]
}

export function Posts({posts}: postsProps) {
    return (<div className={'posts'}>
            {posts.map((p,i) => <Post key={i} {...p}/>)}
        </div>
    );
}

