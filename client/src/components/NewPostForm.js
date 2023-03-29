import React, { useState } from "react";
import { useHistory } from "react-router-dom";






function NewPostForm({ currentUser, setPosts, user }) {

    const [post, setPost] = useState('')
    const [likes, setLikes] = useState(0)
    const history = useHistory()
    const user_id = user


    function handleSubmit(e) {
        e.preventDefault();
    
        const newPost = {
            post: post,
            likes: likes,
            poster_id: currentUser.id,
            // user_id: user_id
        }

        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        })
        .then(resp => {
            if(resp.status === 201) {

                fetch("/posts")
                .then((resp) => resp.json())
                .then((data) => setPosts(data))
                history.push('/Home')
            } else {
            resp.json().then((errorData)=> alert(errorData.errors))
            }
            if (!currentUser) {history.push("/Home")}
        });
    } 


    return (
        <div className="post-form">
            <form onSubmit={handleSubmit}>
            <input 
            className="post-input"
            type='text'
            placeholder="Create New Post" 
            value={post}
            onChange={(e) => setPost(e.target.value)}
            />
            <button className="post-btn">Post</button>
            </form>
        </div>
    )
}


export default NewPostForm;