import { useState } from "react";
import { useHistory } from 'react-router-dom'
import background from '../images/background.png'
import Signup from "./Signup";
import { Link } from 'react-router-dom'
import Nav from "./Nav";



function Login({ handleLogin, updateUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        if(res.ok) {
          res.json().then(user => handleLogin(user))
          .then(()=> history.push('/Home'))
        } else {
          res.json().then((errorData)=> alert("Invalid Username and/or Password"))
        }
      })
  };


   

    return (
        <div className="login">
          <h2>Login</h2>
            <form>
          <input 
            type="username" 
            value={username}
            placeholder='Username'
            required
            onChange={ (e) => setUsername(e.target.value) }/>
          <input 
            type="password" 
            placeholder='Password'
            required
            value={password}
            onChange={ (e) => setPassword(e.target.value) }/>
          <button className='btn' onClick={handleSubmit}>Login</button>
      </form>
      <br/>
      <div className=".register">
        Don't have an account <Link to='/Signup' className="login-link">SignUp Here</Link>
        </div>
        </div>
    )
}

export default Login;
