import React from 'react'
import data_product from "../Assets/data";
import {Item} from "../Item/Item";

const Popular = ()=>{
    return (
        <div className='mt-20'>
            <h1 className='flex justify-center underline text-4xl font-bold'>POPLAR IN WOMEN</h1>
            <div className='flex gap-10 mt-20'>
                 {/*loop everything in item class in here*/}
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}
export default Popular