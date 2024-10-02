import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import FeaturedProducts from '../components/FeaturedProducts';
import { CartContext } from '../context/CartContext';

const Home = () => {
    const data = useLoaderData();
    const {cart} = useContext(CartContext)
    console.log({cart})
    return (
        <div className='homeWrapper'>
            <div className=''></div>
            <FeaturedProducts data={data} />
        </div>
    )
}

export default Home
