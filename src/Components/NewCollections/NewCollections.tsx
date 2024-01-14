import React from 'react'
import new_collections  from "../Assets/new_collections";
import {Item} from "../Item/Item"

const NewCollections = ()=>{
    return (
        <div className='m-28'>
            <h1 className='flex justify-center underline text-4xl font-bold mb-32'>NEW COLLECTIONS</h1>
            <div className='grid grid-cols-4 gap-7'>
                {new_collections.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default NewCollections