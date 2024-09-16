import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-links">
                    <li className='navbar-item'><Link to="/">Home</Link></li>
                    <li className="navbar-item"><Link to="/apply">Apply Job</Link></li>
                    <li className="navbar-item"><Link to="/search">Search Job</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar