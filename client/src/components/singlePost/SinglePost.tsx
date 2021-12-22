import React, {MouseEventHandler, useContext, useEffect, useState} from 'react';
import './singlePost.css';
import {NavLink, useParams} from "react-router-dom";
import axios, {AxiosRequestConfig} from "axios";
import {postType, userType} from "../../types/typpes";
import {Context} from "../../context/Context";

type QuizParams = {
    postid: string
}

export function SinglePost() {
    const {postid} = useParams<QuizParams>()
    const [post, setPost] = useState({} as postType)
    const {state} = useContext(Context)
    const {user} = state
    const PF = 'http://localhost:3000/images/'

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/posts/${postid}`)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost().then();
    }, [postid])
// DELETE POST
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/posts/${postid}`, {
                data: {
                    username: user ? user.username : ''
                }
            })
            res.data && window.location.replace(`/blog-site#/`)

        } catch (err) {
            console.log(err)
        }
    }
//UPDATE POST
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [updateMode, setUpdateMode] = useState(false)
    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user ? user.username : '',
                title, desc
            })
            setUpdateMode(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (<div className={'singlePost'}>
            <div className="singlePostWrapper">{!updateMode ?
                <img src={PF + post.photo} alt="" className="singlePostImg"/>
                : null
            }

                {updateMode ? <input type={'text'} className="singlePostTitleInput" value={title}
                                     onChange={(e) => setTitle(e.currentTarget.value)} autoFocus/>
                    :
                    <h1 className="singlePostTitle">
                        {title}
                        {user && post.username === user.username &&
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}/>
                            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}/>
                        </div>}
                    </h1>}
                <div className="singlePostInfo">
                <span className={'singlePostAuthor'}>
                    Author: <NavLink to={`/?user=${post.username}`} className={"link"}><b>{post.username}</b>
                </NavLink>

                </span>
                    <span className={'singlePostDate'}>{new Date(post.updatedAt).toDateString()}</span>
                </div>
                {updateMode ? <textarea className={'singlePostDescInput'} value={desc}
                                        onChange={(e) => setDesc(e.currentTarget.value)}/>
                    : <p className={'singlePostDesc'}>{desc}</p>}
                {updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>}
            </div>

        </div>
    );
}

