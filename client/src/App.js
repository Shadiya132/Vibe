import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Login from './components/Login'
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import NewPostForm from "./components/NewPostForm";
import Post from "./components/Post";
import PostHome from "./components/PostHome";

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState('') 
  const [comments, setComments] = useState([])
  const [search, setSearch] = useState('')



  
  useEffect(() => {
  fetch("/me")
    .then(resp => {
      if(resp.ok) {
        resp.json().then(user => {
          setCurrentUser(user)
        })
      }
    })
  },[])



  useEffect(()=> {
    fetch("/users")
    .then(resp => resp.json())
    .then(data => setUser(data))
  }, [])




  useEffect(()=> {
    fetch("/posts")
    .then(resp => resp.json())
    .then(data => setPosts(data))
  }, [comments])


// get posts 
useEffect(() => {
    fetch('/posts')
    .then(resp => {
      if(resp.ok) {
        resp.json().then(post => {
          setCurrentPost(post)
        })
      }
    })
  }, [])



// console.log(currentPost)

const filterPosts = posts.filter(post => (
  post.post.toLowerCase().includes(search.toLowerCase())
  )
)

  // console.log(user)

  // handles login
  function handleLogin(currentUser) {
    setUser(currentUser)
  }

  // logout function
  function handleLogout(){
    setCurrentUser(null)
  }

  // Editing user details
  const onEdit = (modifiedUser) => {
    const editUser = user.map(user => currentUser.id === user.id ? modifiedUser : user)
    setCurrentUser(editUser)
  }

  // Search through post
  const newSearch = (value) => {
    setSearch(value)
  }

  // Deleting post functionality
  const removePost = (currentUserId) => {
    const updatedPost = posts.filter((post) => post.id !== currentUserId)
    setPosts(updatedPost)
  }

  // const editPost = (currentUserId) => {
  //   const updatedPost = posts.filter((post) => post.id !== currentUserId)
  //   setPosts(updatedPost)
  // }

  function editPost(modifiedPost) {
    console.log(modifiedPost)
    // console.log("hey")
 const updatePost= posts.map(task => task.id === modifiedPost.id ? modifiedPost: task)
 setPosts(updatePost)
}


  
console.log()
  return (
    <div className="App">
      <main>
        <Switch>
            <Route exact path='/Login' >
              <Login  
              handleLogin={handleLogin} 
              user={user} 
              />
            </Route>
            <Route exact path='/Signup'>
              <Signup 
              handleLogin={handleLogin}
              />
              </Route>
            <Route path='/Home'>
              <Home 
              posts={filterPosts}
              comments={comments}
              setPosts={setPosts}
              user={user}
              handleLogout={handleLogout} 
              currentUser={currentUser}
              currentPost={currentPost}
              setCurrentPost={setCurrentPost}
              newSearch={newSearch}
              search={search}
              editPost={editPost}
              removePost={removePost}
              stateComments={comments}
              setComments={setComments}
              />
            </Route>
            <Route exact path='/'>
              <Welcome />
            </Route>
            <Route path='/Profile'>
              <Profile 
              currentUser={currentUser} 
              onEdit={onEdit} 
              handleLogout={handleLogout}
              user={user}
              setUser={setUser}
              // onDeleteUser={onDeleteUser}
               />
            </Route>
            <Route path='/Post'>
              <Post 
              posts={posts}
              setCurrentPost={setCurrentPost}
              />
            </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
