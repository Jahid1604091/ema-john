import React from 'react'
import { useParams } from 'react-router'
import productsData from '../fakeData/products.js'
import Header from './Header.js'
import Navbar from './Navbar.js'
import Product from './Product.js'
const ProductDetails = () => {
    //   const productKey =   history.location.key
    const { key } = useParams()
    const product = productsData.find(p => p.key === key)
  
    return (
        <div>
            <Header/>
            <Navbar/>
           <Product product={product}/>
        </div>
    )
}

export default ProductDetails
