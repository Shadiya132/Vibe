import React from "react";
import { Link } from 'react-router-dom'






function Welcome() {





    return (
        <div className="app">
            <Link className="welcome" to='/Login'>Vibe</Link>
            <div className="details"></div>
            <Link to='/Login'>Click Here To Login Or Create an Account</Link>
        </div>
    )
}

export default Welcome