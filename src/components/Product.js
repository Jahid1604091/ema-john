import React from 'react'
import styled from 'styled-components'

const Product = ({ product, handleAddProduct }) => {
    const { img, name, seller, price, stock } = product
    // console.log(product)
    return (
        <Wrapper>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4">
                        <img className='img-fluid' src={img} alt={name} />
                    </div>
                    <div className="col-md-8">
                        <div className="product-details">
                            <h3>{name}</h3>
                            <p>by {seller}</p>
                            <h5> ${price}</h5>
                            <p>only {stock} in stock - so hurry up !</p>
                            <button onClick={()=>handleAddProduct(product)} className='btn'><i className="fas fa-cart"></i> add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
img{

}
.product-details{
    border-bottom:1px solid var(--clr-grey-5);
    margin:5px;
    padding-bottom:10px;
}
`
export default Product
