import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import Popular from "../Popular/Popular";
const Footer = ()=>{
    return (

        <>
            <div className='flex gap-2 bg-black mt-32 '>
                <div>
                    <img className='scale-75' src={instagram_icon}/>
                </div>
                <div>
                    <img className='scale-75' src={pintester_icon}/>
                </div>
                <div>
                    <img className='scale-75' src={whatsapp_icon}/>
                </div>
            </div>


            <div className='flex gap-32 justify-center'>
                <div>
                    <img src={footer_logo}/>
                    <p>SHOPPER</p>
                </div>
                <div>
                    <h1 className='font-bold'>Information</h1>
                    <ul className='ml-4 grid gap-5'>
                        <li>Company</li>
                        <li>Products</li>
                        <li>Office</li>
                        <li>About</li>
                        <li>Content</li>
                    </ul>
                </div>

                <div>
                    <hr/>
                    <p>Copyright @ 2024 - All Right Reserved</p>
                </div>
            </div>
        </>

    )
}

export default Footer