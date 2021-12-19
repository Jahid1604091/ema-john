import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Review = ({ cart,handleRemoveFromCart }) => {
    const { name, quantity, price, seller, stock, img,key } = cart
    return (
        <Wrapper>

            {
                cart.map(c => {
                    return (
                        <div key={c.key}>
                            <div className="row">
                                <div className="col-md-4">
                                    <img className='img-fluid' src={c.img} alt={c.name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="cart-items">
                                        <h3>{c.name}</h3>
                                        <p>by {c.seller}</p>
                                        <h5> ${c.price}</h5>
                                        <p>quantity -  {c.quantity} </p>
                                        <button onClick={() => handleRemoveFromCart(c.key)} className='btn'> remove from cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .cart-items{
    border-bottom:1px solid var(--clr-grey-5);
    margin:5px;
    padding-bottom:10px;
}
`

export default Review
