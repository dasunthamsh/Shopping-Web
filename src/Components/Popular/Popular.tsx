import React from 'react'
import data_product from "../Assets/data";
import {Item} from "../Item/Item";

const Popular = ()=>{
    return (
        <div>
            <h1>Popular in women</h1>
            <hr/>
            <div className='flex'>
                 {/*loop everything in item class in here*/}
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}
export default Popular