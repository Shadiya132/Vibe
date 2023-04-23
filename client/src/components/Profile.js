import React, { useEffect, useState } from "react";
import { useHistory, Link} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProfileNav from "./ProfileNav";




function Profile({ handleLogout, onEdit, currentUser, onDeleteUser }) {
    
    // const [showEditForm, setShowEditForm] = useState(false)
    const history = useHistory()



    // initial data from user
//     const initialState = {
//       username: currentUser.username,
//       password: currentUser.password,
//       first_name: currentUser.first_name,
//       last_name: currentUser.last_name,
//       age: currentUser.age,
//       image: currentUser.image
//     }

//     const [ form, setForm] = useState(initialState)
//     const { first_name, last_name, username, password, image, age } = form

//     const handleForm = (e) => {
//       setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   async function handleEdit(e) {
//     e.preventDefault()
//     setShowEditForm(false)

//     const requestObj = {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(form)
//     }

// await fetch(`users/${currentUser.id}`, requestObj)
//         .then(resp => resp.json())
//         .then(() => {
//             onEdit(form) 
//             // history.push("/Profile")
//             window.location.reload();
//         })
// }

//       //Form for editing user profile
//       const editForm = (
//         <form className='profile-form' onSubmit={handleEdit}>
//             <br/>
//             <input className='edit-input' type="text" placeholder="First Name" value={first_name} onChange={handleForm}/>
//                 <br/>
//             <input className='edit-input' type="text" placeholder="Last Name" value={last_name} onChange={handleForm}/>
//                 <br/>
//             <input className='edit-input' type='text' placeholder="Age" value={age} onChange={handleForm}/> 
//                 <br/>
//             <input className='edit-input' type='text' placeholder="Username"  value={username} onChange={handleForm}/>
//                 <br/>
//             <input className='edit-input' required type='Password' placeholder="Password" value={password} onChange={handleForm}/>
//                 <br/>
//             <button type="button" className="cancel-button" onClick={() => setShowEditForm(false)}>Cancel</button>
//             <button type="submit">Save</button>
//         </form>
//     )

    // Logout functionality 
    function handleClick() {
      fetch("/logout", { 
          method: "DELETE" 
      })
        .then((r) => {
          if (r.ok) {
            handleLogout(null);
          }
          history.push('/login')
          window.location.reload();
        });
    }

    // const editButton = <button onClick={()=> setShowEditForm(true)} className='pro-btn'>Edit Profile</button>

        return (
                <div className='profile'>
                  <ProfileNav />
                  <div className="name2">@{currentUser.username}'s Profile</div>
                     <div className="pro-details">
                        <AccountCircleIcon sx={{ fontSize: 90 }}></AccountCircleIcon>
                         {/* <div className="profile-image" role="button" title="Click to edit photo">
                            <img src={currentUser.image} alt="profile" /> 
                        </div>  */}
                        <div className="username">@{currentUser.username}</div>
                        <br/>
                        <div className="name">{currentUser.first_name} {currentUser.last_name} </div>
                        <br/>
                        <div>Email Address: {currentUser.email}</div>
                        <br/>
                        <div>{currentUser.age} Years Old</div>
                        {/* <button className="pro-btn" onClick={handleClick}> Logout </button> */}
                      <Link to='/Home'><button className="pro-btn">HomePage</button></Link> 
                        {/* {showEditForm ? editForm : editButton} */}
                    </div>
                </div>
        )
}



export default Profile;