import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import Popular from "../Popular/Popular";
const Footer = ()=>{
    return (

        <div className='flex justify-center text-center'>
            <div className='grid gap-10'>
                <div>
                    <img src={footer_logo}/>
                    <p className='text-center'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Incidunt consequuntur amet culpa
                        cum itaque neque.</p>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <li>Company</li>
                        <li>Products</li>
                        <li>Office</li>
                        <li>About</li>
                        <li>Content</li>
                    </ul>
                </div>

                <div>
                    <p>Copyright @ 2024 - All Right Reserved</p>
                </div>
                <div className='flex gap-2 mt-32 '>
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
            </div>

        </div>

    )
}

export default Footer


