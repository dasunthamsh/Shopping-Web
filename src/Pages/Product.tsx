import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext/ShopContext";
import all_product from "../Components/Assets/all_product";
import { useParams } from "react-router-dom"
import Breadcrum from '../Components/Breadcrum/Breadcrum'

const Product = ()=>{

    //const {all_Products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id ===Number(productId));

    return (
        <div>
            <Breadcrum product={product?.category ? product : { category: '', name: '' }} />
        </div>
    )
}

export default Product