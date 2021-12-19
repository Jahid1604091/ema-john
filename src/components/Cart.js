import React from 'react'

import styled from 'styled-components'

const Cart = ({ cart,children }) => {
    // let total = 0
    // for (let i = 0; i < cart.length; i++) {
    //     const prod = cart[i];
    //     total += prod.price
        
    // }

 
    let shippingCost = 0
    const subTotal = (cart.reduce((total,prod)=>total + prod.price * prod.quantity,0)).toFixed(2)
    
    if(subTotal > 1){
        shippingCost = (subTotal - (subTotal * 0.9)).toFixed(2)
    }

   
    return (
        <Wrapper>
            <div className='cart'>
                <h5>Order Summary</h5>
                <p className="lead">total items - <strong>{cart.length}</strong></p>
                <h6>Sub total ${subTotal} </h6>
                <small>shipping cost ${shippingCost}</small>
                <hr />
                <h5>Grand Total ${(Number(subTotal) + Number(shippingCost)).toFixed(2)}</h5>
               {children}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .cart{
        float:right;
        text-align:center;
        text-transform:capitalize;
        
    }
`
export default Cart
