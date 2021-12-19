import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const PlaceOrder = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <h1 className="p-4 display-1 text-center my-auto text-success">
                Congratulations ! Order Successfully placed !
            </h1>
        </div>
    )
}

export default PlaceOrder
