import React from "react";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";






function ProfileNav({ handleLogout }) {
    // const history = useHistory()




    return (
        <nav className="pro-nav">
            <h1><Link className='vibe' to='/Home'>Vibe</Link></h1>
        </nav>
    )
}

export default ProfileNav;