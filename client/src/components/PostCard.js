import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import Post from "./Post";
import NewComment from "./NewComments";



function PostCard({user, post,currentUser, comments, currentPost, poster, stateComments, editPost, removePost, setComments, setCurrentPost}) {

    const history = useHistory
    const {id} = useParams()
  
    const initialFormValues = {
      post: "",
    }
  
    const [ showingEditForm, setShowingEditForm ] = useState(false)
    const [ formData, setFormData ] = useState(initialFormValues)
  
  
    // editing posts functionality
  function handleFormSubmit(e) {
      e.preventDefault()
      setShowingEditForm(false)
      
        if (post.poster_id === currentUser.id) {
      const requestObj = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
         
     fetch(`/posts/${post.id}`, requestObj)
      .then(response => response.json())
      .then(() => {
          editPost(formData)
          window.location.reload()
      })
    }   else { alert ('Cannot edit post')
      }
  
    }
  
    const handleFormData = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
    const form =
      <form onSubmit={handleFormSubmit}>
        <label>Edit Post</label>
          <input
            type="text"
            name="post"
            value={formData.post ??''}
            onChange={handleFormData}
          />
          <button type="submit">Save</button>
          <button type="button" className="cancel-button" onClick={() => setShowingEditForm(false)}>Cancel</button>
        </form>
  
  
  const editButton = <EditIcon className='like-btn' onClick={()=> setShowingEditForm(true)}>Edit</EditIcon>
  
  
  //delete functionality 
      const handleDelete = () => {
        if (post.poster_id === currentUser.id) {
        
        fetch(`/posts/${post.id}`, {
         method: 'DELETE'
        })
        .then(() => removePost(id))
        window.location.reload();
        // history.push('/home')
      } else {
        alert ("Cannot delete post you did not create!")
      }
  }

  const deleteButton = <DeleteIcon className='like-btn' onClick={handleDelete}></DeleteIcon> 


    //   test 
    const [postCreator, setPostCreator] = useState('');

    useEffect(() => {
        fetch(`/users/${currentPost.poster_id}`)
            .then(r => r.json())
            .then(data => setPostCreator(data.username))
    }, [])

    console.log(postCreator)



    return( 
        <div className="posts">
        <div className="user" to='Profile'></div>
        <p>{post.post}</p>
        {/* <p className="basic-box max-w-max">Replies: {comment_count_total}</p> */}
        <p></p>
        {/* <FavoriteIcon className="icon-1"/> */}
        {showingEditForm ? form : editButton}
        {/* <DeleteIcon className='like-btn' onClick={handleDelete}/> */}
        {currentUser.id === post.poster_id ? deleteButton : null}
        <div>
            {/* {commentArray} */}
            </div>
                <NewComment
                    comments={stateComments} 
                    // handleNewComment={handleNewComment}
                    setCurrentPost={setCurrentPost} 
                    currentPost={currentPost}
                    currentUser={currentUser}
                    setComments={setComments}
                />
                <Post 
                setComments={setComments}
                currentPost={currentPost}
                setCurrentPost={setCurrentPost}
                stateComments={stateComments}
                comments={comments}
                post={post}
                />
    </div>
    )
}

export default PostCard