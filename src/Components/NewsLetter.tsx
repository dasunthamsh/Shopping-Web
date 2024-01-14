import React from 'react';

const NewsLetter = () => {
    return (
        <div className='flex justify-center items-center  bg-gradient-to-b from-fuchsia-200 m-32 pt-10'>
            <div className='text-center grid gap-5'>
                <h1 className='font-bold text-4xl'>Get Exclusive Offers On Your Email</h1>
                <p className=''>Subscribe to our Newsletter and stay updated</p>
                <div>
                    <input className='p-3 px-20 rounded-full border-2' type="text" placeholder="Enter your email"/>
                    <button className='p-3 rounded-full bg-black text-cyan-50 px-8 z-20 right-11 relative'>Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;
