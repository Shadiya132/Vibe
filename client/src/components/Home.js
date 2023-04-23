import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Post from './Post'
import PostCard from "./PostCard";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import NewPostForm from "./NewPostForm";




function Home({user, posts, comments, removePost, currentPost, stateComments, setComments, currentUser, handleLogout, setPosts, newSearch, search, editPost, setCurrentPost}) {

    const [poster, setPoster] = useState('');
    const history = useHistory()
    const { id } = useParams

    useEffect(() => {
        fetch(`/users/${currentPost.poster_id}`)
        .then(resp => resp.json())
        .then(data => setPoster(data.username))
    }, [])

    // useEffect(() => {
    //     fetch(window.location.href)
    //     .then(r => r.json())
    //     .then(data => setCurrentPost(data))
    // }, [posts])


      
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
                {posts.map(post => <PostCard 
                post={post} 
                key={post.id} 
                user={user}
                currentPost={currentPost}
                currentUser={currentUser} 
                removePost={removePost}
                setCurrentPost={setCurrentPost}
                poster={poster}
                editPost={editPost}
                comments={comments}
                setComments={setComments}
                stateComments={stateComments}
                />)}
                </ul>
        </div>
    )
}


export default Home;