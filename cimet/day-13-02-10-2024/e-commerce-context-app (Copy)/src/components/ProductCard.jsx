import React, { useContext } from 'react'
import "../styles/ProductCard.css"
import { CartContext } from '../context/CartContext';

const ProductCard = ({ data }) => {
    const { addToCart, updateQuantity } = useContext(CartContext);
    return (
        <div className='productCardWrapper'>
            <img style={{
                width: "100px", height: "100px"
            }}
                src={data.image} alt="" />
            <h3>{data.title}</h3>
            <p>{data.price}</p>
            <button onClick={()=>addToCart(data)}>Add to Cart</button>
        </div>
    )
}

export default ProductCard
