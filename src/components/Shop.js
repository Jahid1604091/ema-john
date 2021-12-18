import React,{useState} from 'react';
import styled from 'styled-components';
import productsData from '../fakeData/products.js' 
import Cart from './Cart.js';
import Product from './Product.js';
const Shop = () => {
   const first10 = productsData.slice(0,10)
    const [products,setProducts] = useState(first10)
    const [cart,setCart] = useState([])
   const handleAddProduct = (product) =>{
       const newCart = [...cart,product]
       setCart(newCart)
   }
    return (
        <Wrapper>
           <div className="container">
               <div className="row">
                   <div className="col-md-8">
                        {
                            products.map((product)=>{
                                return <Product 
                                product={product} 
                                handleAddProduct={handleAddProduct}
                                key={product.key}/>
                            })
                        }
                   </div>
                   <div className="col-md-4">
                      <Cart cart={cart}/>
                   </div>
               </div>
           </div>
        </Wrapper>
    );
};


const Wrapper = styled.section`
   
`
export default Shop;