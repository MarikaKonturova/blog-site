import React, {useContext, useState} from 'react';
import './write.css';
import userPostTemp from '../../assets/images/post_templ.jpg'
import axios from "axios";
import {Context} from "../../context/Context";

interface newPost {
    username: string | null
    title: string
    desc: string
    photo?: string
}


export function Write() {
    const [error, setError] = useState(false)
    const [file, setFile] = useState<File>()
    const {state} = useContext(Context)
    const handleImageChange = ({currentTarget: {files}}: React.ChangeEvent<HTMLInputElement>) => {
        if (files && files.length) {
            setFile(files[0]);
        }}
        const handleSubmit = async (e: React.SyntheticEvent) => {
            e.preventDefault();
            setError(false)
            const target = e.target as typeof e.target & {
                title: { value: string };
                desc: { value: string };
            };
            const title = target.title.value;
            const desc = target.desc.value;
            const username = state.user ? state.user.username : null

            let newPost: newPost = {username, title, desc}

            if (file) {
                const data = new FormData();
                const filename = `${Date.now()}`;
                data.append('name', filename)
                data.append('file', file);
                newPost.photo = filename
                try {
                    await axios.post('/upload', data)

                } catch (err) {
                    console.log(err)
                }
            }
            try {
                const res = await axios.post('/posts', newPost)
                console.log(res)
                res.data && window.location.replace(`/blog-site#/post/${res.data._id}`)

            } catch (err) {
                setError(true)
            }

        }
        return (
            <div className={'write'}>
                <img className={'writeImg'}
                     src={file ? URL.createObjectURL(file) : userPostTemp}/>
                <form className="writeForm" onSubmit={handleSubmit}>
                    <div className="writeFormGroup">
                        <label htmlFor='fileInput'><i className="writeIcon fas fa-plus"/></label>
                        <input  onChange={handleImageChange}
                               type={'file'} id={'fileInput'} style={{display: "none"}}/>
                        <input name={'title'}
                               type={'text'} placeholder={'Title'} id={'textInput'} className={'writeInput'} autoFocus/>
                    </div>
                    <div className="writeFormGroup">
                        <textarea name={'desc'} placeholder={'Tell your story...'} className={'writeInput writeText'}/>
                    </div>
                    <button className="writeSubmit">Publish</button>
                </form>
            </div>
        );
    }

