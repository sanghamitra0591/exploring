import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Header.css"

const Header = () => {
    return (
        <div className='headerWrapper'>
            <div className='headerContainer'>
                <h1><Link to="/">ECommerce</Link></h1>
                <div>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Carts</Link>
                    <Link to="/blogs">Blogs</Link>
                </div>
            </div>
        </div >
    )
}

export default Header
