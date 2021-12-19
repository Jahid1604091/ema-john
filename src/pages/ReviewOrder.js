import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Cart from '../components/Cart'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Review from '../components/Review'
import productsData from '../fakeData/products.js'
import { getStoredCart, deleteFromDb, clearTheCart } from '../utilities/fakedb.js'

const ReviewOrder = () => {
    const [reviewCart, setReviewCart] = useState([])
    
    useEffect(() => {
        const savedCart = getStoredCart()
        const productKeys = Object.keys(savedCart)
        //    const productValues = Object.values(savedCart) or,
        //    const counts = productKeys.map(key=>savedCart[key])
        const cartProducts = productKeys.map(key => {
            const product = productsData.find(p => p.key === key)
            product.quantity = savedCart[key]
            return product
        })
        setReviewCart(cartProducts)
    }, [])

    const handleRemoveFromCart = (key) => {
        const remainingProductsInCart = reviewCart.filter(rc => rc.key !== key)
        setReviewCart(remainingProductsInCart)
        deleteFromDb(key)
    }

    const handlePlaceOrder = () => {
        setReviewCart([])
        clearTheCart()
    }

        
        return (
            <div>
                <Header />
                <Navbar />
                <Wrapper>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <Review
                                    handleRemoveFromCart={handleRemoveFromCart}
                                    cart={reviewCart} />
                            </div>
                            <div className="col-md-4">

                                <Cart cart={reviewCart}>
                                    <Link className='btn' onClick={handlePlaceOrder} to='/place-order'>place order</Link>
                                </Cart>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    

}


const Wrapper = styled.section`
   
`

export default ReviewOrder
