import React from 'react';
import './write.css';
import userPostTemp from '../../assets/images/post_templ.jpg'
export function Write() {
    return (
        <div className={'write'}>
            <img className={'writeImg'}
            src={userPostTemp}/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor='fileInput'><i className="writeIcon fas fa-plus"/></label>
                    <input type={'file'} id={'fileInput'} style={{display:"none"}}/>
                    <input type={'text'} placeholder={'Title'} id={'textInput'} className={'writeInput'} autoFocus/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder={'Tell your story...'}  className={'writeInput writeText'}/>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
}

