import React, {useContext} from 'react';
import { ShopContext } from '../Context/ShopContext/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import all_product from '../Components/Assets/all_product';
import {Item} from '../Components/Item/Item'

interface ShopCategoryProps {
    category?: string;
    banner?:any;

}

const ShopCategory: React.FC<ShopCategoryProps> = ({ banner,category }) => {

  //  const { all_product } = useContext(ShopContext);

    return (
        <div>
            <img src={banner}/>
            <div>
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div>
                    <img src={dropdown_icon}/>
                </div>
            </div>
            <div>
                {all_product.map((item,i) => {
                    if (category==item.category){
                        return <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}/>
                    }else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};

export default ShopCategory;
