import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Shop from '../components/Shop'

const Home = () => {
    return (
        <Wrapper>
           <Header/>
           <Navbar/>
           <Shop/>
        </Wrapper>
    )
}

const Wrapper = styled.article`
  
`

export default Home
