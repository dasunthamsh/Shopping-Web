import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offer = ()=>{
    return (
        <div className='flex justify-center items-center bg-gradient-to-b from-fuchsia-200 m-40'>
            <div>
                <h1 className='text-6xl font-bold'>EXCLUSIVE</h1>
                <h1 className='text-6xl font-bold'>Offers For You</h1>
                <p className='font-bold mt-3'>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className='bg-red-600 mt-10 p-2 rounded-full px-5'>Check Now</button>
            </div>
            <div>
                <img className='scale-75' src={exclusive_image} alt='exclusive_image'/>
            </div>
        </div>
    )
}

export default Offer