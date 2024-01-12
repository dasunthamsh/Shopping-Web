import React from 'react'
import hero_image from '../Assets/hero_image.png'
const Hero = ()=>{
    return (
        <div className='hero flex justify-center items-center gap-44 '>
            <div>
                <h4 className='text-2xl font-bold'>NEW ARRIVALS ONLY</h4>
                <h1 className='text-8xl font-bold'>new</h1>
                <h1 className='text-8xl font-bold'>collections</h1>
                <h1 className='text-8xl font-bold'>for you</h1>
                <button className='bg-red-600 rounded-full p-2 text-2xl mt-20'>Latest Collection</button>
            </div>
            <div>
                <img className='scale-75' src={hero_image} alt='hero_img'/>
            </div>

        </div>
    )
}

export default Hero