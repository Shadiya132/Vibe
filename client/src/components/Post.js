import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import { useParams } from "react-router-dom";





function Post({post,currentUser, poster, editPost, removePost,}) {

  const history = useHistory
  const {id} = useParams()

  const initialFormValues = {
    post: "",
  }

  const [ showingEditForm, setShowingEditForm ] = useState(false)
  const [ formData, setFormData ] = useState(initialFormValues)



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
        <button type="button" className="cancel-button" onClick={() => setShowingEditForm(false)}>Cancel</button>
      </form>


const editButton = <button className='like-btn' onClick={()=> setShowingEditForm(true)}>Edit</button>


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


    return (
        <div className="posts">
            <div className="user" to='Profile'></div>
            <p>{post.post}</p>
            <p></p>
            {showingEditForm ? form : editButton}
            <button className='like-btn' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Post;