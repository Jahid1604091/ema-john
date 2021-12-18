import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <nav>
                <ul>
                    <li><Link to="/">shop</Link></li>
                    <li><Link to="/order-review">order review</Link></li>
                    <li><Link to="/manage-inventory">manage inventory</Link></li>
                </ul>

            </nav>

        </Wrapper>
    )
}

const Wrapper = styled.section`
 background-color: var(--clr-black);
ul{
     display:flex;

     li{
         padding:8px 15px;
         transition:var(--transition);
         &:hover{
             background-color:var(--clr-primary-5);
         }
         a{
            color: var(--clr-primary-10);
            text-transform:Capitalize;
         }
     }
 }
`
export default Navbar
