import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import productsData from '../fakeData/products.js'
import Cart from './Cart.js';
import Product from './Product.js';
import {addToDb,getStoredCart} from '../utilities/fakedb.js'
import { Link } from 'react-router-dom';
const Shop = () => {
    const first10 = productsData.slice(0, 10)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])
  
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
        setCart(cartProducts)
    }, [])


    const handleAddProduct = (product) => {
        //add a quantity property by checking same product or not
        const sameProduct = cart.find(c=>c.key === product.key)
        let newCart;
        if(sameProduct){
            sameProduct.quantity = sameProduct.quantity + 1
            const others = cart.filter(c=>c.key !== product.key)
            newCart = [...others,sameProduct]
        }
        else{
            product.quantity = 1
            newCart = [...cart,product]
        }
        setCart(newCart)
        addToDb(product.key,1)
    }

    return (
        <Wrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {
                            products.map((product) => {
                                return <Product
                                    product={product}
                                    handleAddProduct={handleAddProduct}
                                    key={product.key} />
                            })
                        }
                    </div>
                    <div className="col-md-4">
                        <Cart cart={cart}>
                        <Link to='/order-review' className="btn">review cart</Link>
                        </Cart>
                            
                           
                            
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.section`
   
`
export default Shop;