import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Post from './Post'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import NewPostForm from "./NewPostForm";




function Home({posts, removePost, currentPost, setCurrentPost, currentUser, handleLogout, user, setPosts, newSearch, search, editPost}) {

    const [poster, setPoster] = useState('');
    const history = useHistory()
    const { id } = useParams

    useEffect(() => {
        fetch(`/users/${currentPost.poster_id}`)
        .then(resp => resp.json())
        .then(data => setPoster(data.username))
    }, [])


      
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
                poster={poster}
                editPost={editPost}
                />)}
                </ul>
        </div>
    )
}


export default Home;