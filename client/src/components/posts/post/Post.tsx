import React from 'react';
import './post.css'
import postImg from '../../../assets/images/post_templ.jpg'
import {Link} from 'react-router-dom';
import {postType} from "../../../types/typpes";

export function Post(post: postType) {
    return (<div className={'post'}>
            {post.photo && <Link to={`/post/${post._id}`}>
                <img
                    className={'postImg'}
                    src={post.photo}
                    alt={'postImg'}/>
            </Link>}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map(cat => <span className="postCat">{cat.name}</span>)}
                </div>
                <Link to={`/post/${post._id}`} className={'link'}>
                    <span className="postTitle">{post.title}</span></Link>
                <hr/>
                <span className="postDate">{new Date(post.updatedAt).toDateString()}</span>
            </div>
            <p className={'postDesc'}>{post.desc}</p>
        </div>
    );
}

