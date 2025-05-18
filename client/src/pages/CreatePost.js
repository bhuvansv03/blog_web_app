import React, { useEffect, useRef, useState } from "react";
import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from "react-router-dom";

export default function CreatePost() {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { quill, quillRef } = useQuill();
    const [editorHeight, setEditorHeight] = useState("auto"); // Start small

    useEffect(() => {
        if (!quill) {
            return; // Exit if quill is not ready
        }
    
        quill.on("text-change", () => {
            if (quill.root) {
                setContent(quill.root.innerHTML); // Ensure quill.root exists
            }
            const scrollHeight = quillRef.current.firstChild.scrollHeight; // Get editor content height
            setEditorHeight(`${scrollHeight}px`); // Update height dynamically
        });
    }, [quill]);

    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if(response.ok)
        {
            setRedirect(true);
        }
    }

    if(redirect){
        return <Navigate to={'/'} />
    }
    return(
        <form onSubmit={createNewPost}>
            <input type = "title" placeholder={'Title'} value={title} onChange={ev=> setTitle(ev.target.value)}/>
            <input type = "summary" placeholder = {'Summary'} value={summary} onChange={ev => setSummary(ev.target.value)}/>
            <input type = "file" onChange={ev=> setFiles(ev.target.files)}/>
            <div style={{ minHeight: "50px", width: "100%", overflow: "hidden" }}>
                <div
                    ref={quillRef}
                    style={{
                    minHeight: "50px",
                    height: editorHeight, // Dynamic height
                    transition: "height 0.2s ease-out", // Smooth transition
                    }}
                />
            </div>
            <button style={{marginTop:'5px'}}>Create Post</button>
        </form>
    );
}