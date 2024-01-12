import React, {useState} from "react"
import './Navbar.css'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"

const Navbar = ()=>{

    const [menu,setMenu] = useState("Shop")

    return(

        <div className='navbar flex mt-30 mt-10 border-b pb-5'>
            <div className='flex gap-2 ml-32 items-center'>
                <img className='scale-75' src={logo} alt='logo'/>
                <p className='font-bold text-3xl'>MODELER</p>
            </div>
            <ul className='nav-menu flex flex-row gap-10 mx-auto items-center font-bold'>
                <li onClick={()=>{setMenu("Shop")}}>Shop{menu==="Shop" ? <hr style={{ backgroundColor: '#f00', height: '2px'}} />:null}</li>
                <li onClick={()=>{setMenu("Men")}}>Men{menu==="Men" ?<hr style={{ backgroundColor: '#f00', height: '2px'}}/>:null}</li>
                <li onClick={()=>{setMenu("Women")}}>Women{menu==="Women" ?<hr style={{ backgroundColor: '#f00', height: '2px'}}/>:null}</li>
                <li onClick={()=>{setMenu("Kids")}}>Kids{menu==="Kids" ?<hr style={{ backgroundColor: '#f00', height: '2px'}}/>:null}</li>
            </ul>
            <div className='nav-login-cart flex mr-32 gap-5'>
                <button className=''>Login</button>
                <img className='scale-50' src={cart_icon} alt='cart'/>
                <div><div className='relative right-8 bg-red-600 bg-auto rounded-full'>0</div></div>
            </div>
        </div>
    )
}

export default Navbar