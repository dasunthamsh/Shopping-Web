import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offer = ()=>{
    return (
        <div>
            <div>
                <h1>EXCLUSIVE</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div>
                <img src={exclusive_image} alt='exclusive_image'/>
            </div>
        </div>
    )
}

export default Offer