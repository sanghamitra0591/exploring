import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import "../styles/Products.css"

const Products = () => {
    const data = useLoaderData();
    return (
        <div className='productsWrapper'>
            <h2>Products</h2>
            <div className='productsContainer'>
                {data.map((el) => {
                    return <ProductCard key={el.id} data={el} />
                })}
            </div>
        </div>
    )
}

export default Products