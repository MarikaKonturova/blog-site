import React, {useEffect, useState} from 'react';
import './singlePost.css';
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import {postType} from "../../types/typpes";
import {Link} from "@mui/material";
type QuizParams = {
    postid: string
}

export function SinglePost() {
    const {postid} = useParams<QuizParams>()
    const [post, setPost] = useState({} as postType)
    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get(`/posts/${postid}`)
            setPost(res.data)
        }
        getPost().then();
    },[postid] )
    return (<div className={'singlePost'}>
            <div className="singlePostWrapper">
                <img src={post.photo} alt="" className="singlePostImg"/>
            </div>
            <h1 className="singlePostTitle">
                {post.title}
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"/>
                    <i className="singlePostIcon far fa-trash-alt"/>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className={'singlePostAuthor'}>
                    Author: <NavLink to={`/?user=${post.username}`} className={"link"}><b>{post.username}</b>
                </NavLink>

                </span>
                <span className={'singlePostDate'}>{new Date(post.updatedAt).toDateString()}</span>
            </div>
            <p className={'singlePostDesc'}>{post.desc}</p>
        </div>
    );
}

