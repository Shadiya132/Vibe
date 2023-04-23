import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from "react-router-dom";





function Post({post, setCurrentPost, currentPost, currentUser, setComments, stateComments}
  // {post,currentUser, poster, editPost, removePost,}
  ) {



//   const history = useHistory
//   const {id} = useParams()

//   const initialFormValues = {
//     post: "",
//   }

//   const [ showingEditForm, setShowingEditForm ] = useState(false)
//   const [ formData, setFormData ] = useState(initialFormValues)


//   // editing posts functionality
// function handleFormSubmit(e) {
//     e.preventDefault()
//     setShowingEditForm(false)
    
//       if (post.poster_id === currentUser.id) {
//     const requestObj = {
//       method: "PATCH",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     }
       
//    fetch(`/posts/${post.id}`, requestObj)
//     .then(response => response.json())
//     .then(() => {
//         editPost(formData)
//         window.location.reload()
//     })
//   }   else { alert ('Cannot edit post')
//     }

//   }

//   const handleFormData = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
// }

//   const form =
//     <form onSubmit={handleFormSubmit}>
//       <label>Edit Post</label>
//         <input
//           type="text"
//           name="post"
//           value={formData.post ??''}
//           onChange={handleFormData}
//         />
//         <button type="submit">Save</button>
//         <button type="button" className="cancel-button" onClick={() => setShowingEditForm(false)}>Cancel</button>
//       </form>


// const editButton = <EditIcon className='like-btn' onClick={()=> setShowingEditForm(true)}>Edit</EditIcon>


// //delete functionality 
//     const handleDelete = () => {
//       if (post.poster_id === currentUser.id) {
      
//       fetch(`/posts/${post.id}`, {
//        method: 'DELETE'
//       })
//       .then(() => removePost(id))
//       window.location.reload();
//       // history.push('/home')
//     } else {
//       alert ("Cannot delete post you did not create!")
//     }
// }

// let comment_count = post.comments.map ((comment) => comment)
//     const comment_count_total = comment_count.length

//     const handleClick = (e) => {
//         setCurrentPost({...post, [e.target.name]: e.target.value })
//     }



    return (
        <div >
            {/* <div className="user" to='Profile'></div> */}
            {/* <p>{post.post.comments}</p> */}
            <p></p>
            {/* <FavoriteIcon className="icon-1"/>
            {showingEditForm ? form : editButton} */}
            {/* <DeleteIcon className='like-btn' onClick={handleDelete}/> */}
            {/* <button className='like-btn' onClick={handleDelete}>Delete</button> */}
        </div>
    )
}

export default Post;