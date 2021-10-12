import React from 'react';
import './post.css'
import postImg from '../../../assets/images/post_templ.jpg'
import { Link } from 'react-router-dom';
export function Post() {
    return (<div className={'post'}>
            <Link to={'/post/:postid'}><img
                className={'postImg'}
                src={postImg}
                alt={'postImg'}/></Link>
<div className="postInfo">
    <div className="postCats">
        <span className="postCat">Music</span>
        <span className="postCat">Life</span>
    </div>
    <Link to={'/post/:postid'} className={'link'}>
     <span className="postTitle">Lorem ipsum dolor sit amet</span></Link>
    <hr/>
    <span className="postDate">1 hour ago</span>
</div>
            <p className={'postDesc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
    );
}

