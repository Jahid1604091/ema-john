import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'

const Header = () => {
    return (
        <Wrapper>
            <div className='logo'>
                <img src={logo} alt="ema-john" />

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`


    .logo img{
        height:80px;
        width:250px;
        margin:auto;
        padding:5px;
    }

`


export default Header


