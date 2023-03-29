import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Post from './Post'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import NewPostForm from "./NewPostForm";




function PostHome({posts, currentUser, handleLogout, user, removePost, setPosts, currentPost, setCurrentPost, newSearch, search}) {

    const [poster, setPoster] = useState('');
    const { id } = useParams
    const history = useHistory()

    useEffect(() => {
        fetch(`/users/${currentPost.poster_id}`)
        .then(resp => resp.json())
        .then(data => setPoster(data.username))
    }, [])


    function editPost(modifiedPost) {
     const updatePost = currentPost.map(post => post.id === modifiedPost.id ? modifiedPost : post)
     setCurrentPost(updatePost)
    }


    return (
          
        <div className="home">
            <Nav 
            newSearch={newSearch}
            handleLogout={handleLogout} 
            currentUser={currentUser} 
            search={search}
            />
            <NewPostForm 
            currentUser={currentUser} 
            setPosts={setPosts} 
            user={user}
            />
            <ul className="post-card">
                {posts.map(post => <Post 
                post={post} 
                key={post.id} 
                user={user}
                currentUser={currentUser} 
                removePost={removePost}
                currentPost={currentPost}
                setCurrentPost={setCurrentPost}
                editPost={editPost}
                poster={poster}
                />)}
                </ul>
        </div>
    )
}


export default PostHome;