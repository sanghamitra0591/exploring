import React from 'react'
import "../Styles/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container'>
            <div>
                <div>
                    <Link to="/"><img src="https://movix-app-murex.vercel.app/assets/movix-logo-HTlvmwAF.svg" alt="" /></Link>
                </div>
                <div>
                    <p><Link to="/movies"> Movies</Link></p>
                    <p><Link to="/tvshows">TV Shows</Link></p>
                </div>
            </div>
        </div >
    )
}

export default Navbar
