import React from 'react'
import ProductCard from './ProductCard'
import "../styles/FeaturedProducts.css"

const FeaturedProducts = ({data}) => {
    return (
        <div className='featuredProductWrapper'>
            <h1>Featured Products</h1>
            <div className='featuredProductContainer'>
                {data.map((el) => {
                    return <ProductCard key={el.id} data={el} />
                })}
            </div>
        </div>
    )
}

export default FeaturedProducts
