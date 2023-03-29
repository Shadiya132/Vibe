import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'





function Signup({ handleLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()
    const [age, setAge] = useState("")


    function handleSubmit(e) {
      e.preventDefault()
      let signupInput = {
          username: username,
          email: email,
          password: password,
          first_name,
          last_name,
      }
      fetch('/signup', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify(signupInput)
      })
          .then(res => {
              if(res.ok) {
                  res.json()
                  .then(newUser => handleLogin(newUser))
                  history.push('/login')
              }
          })
      setUsername("")
      setEmail("")
      setPassword("")
  }



    return (
          
        <div className="signup">
          <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input 
                className="signup-input"
                type='email'
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                className="signup-input"
                type='first_name'
                placeholder="First Name"
                required
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                />
                 <input 
                className="signup-input"
                type='first_name'
                placeholder="Last Name"
                required
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                />
                <input 
                className="signup-input"
                type='username'
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                className="signup-input"
                type='password'
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <div className=".register">Already Have an Account <Link to ='/Login' className='login-link'>Login Here</Link></div>
                <button className="btn">Sign Up</button>
            </form>
        </div>

    )
}


export default Signup;