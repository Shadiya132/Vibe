import React from "react";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Search from "./Search";





function Nav({ handleLogout, search, newSearch }) {
    const history = useHistory()

    function handleClick() {
        fetch("/logout", { 
            method: "DELETE" 
        })
          .then((r) => {
            if (r.ok) {
              handleLogout(null);
            }
            
          }) .then(() => alert("Logging Out"))
          history.push('/login')
      }



    return (
        <nav className="nav">
          <h1><Link className='vibe' to ='/Home'>Vibe</Link></h1>
                <Search 
                search={search}
                newSearch={newSearch}
                />
                <Link className='link' to ='/Profile'>Profile</Link>
                {/* <Link className="link" to = '/posthome'>Posts</Link> */}
                {/* <button onClick={handleClick} to='/Login'>Logout</button> */}
               <Link className='link' onClick={handleClick} to='/Login'>Logout</Link>
        </nav>
    )
}

export default Nav;