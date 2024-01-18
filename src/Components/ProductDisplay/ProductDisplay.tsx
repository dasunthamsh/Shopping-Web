import React from 'react';
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"

interface ProductDisplayProps {
    product: {
        image: string;
        name: string;
        old_price: number;
        new_price: number;

    };
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
    return (
        <div>
            <div>
                <div>
                    <img src={product.image} alt="Product Image 1" />
                    <img src={product.image} alt="Product Image 2" />
                    <img src={product.image} alt="Product Image 3" />
                    <img src={product.image} alt="Product Image 4" />
                </div>
                <div>
                    <img src={product.image} alt="Product Image 5" />
                </div>
            </div>
            <div>
                <h1>{product.name}</h1>
                <div>
                    <img src={star_icon} alt="Product Image 4" />
                    <img src={star_icon} alt="Product Image 4" />
                    <img src={star_icon} alt="Product Image 4" />
                    <img src={star_dull_icon} alt="Product Image 4" />
                    <p>(867)</p>
                </div>
                <div>
                    <div>${product.old_price}</div>
                    <div>${product.new_price}</div>
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem consequatur corporis delectus
                    doloremque dolorum earum eos expedita facere fugit harum impedit ipsam itaque, libero magnam maxime molestias natus neque, nulla nobis obcaecati officia optio pariatur quasi quidem quo quos repellendus
                    repudiandae, sapiente sequi sint soluta tempora tenetur ullam unde ut voluptates voluptatum.
                </div>
                <div>
                    <h1>Select Size</h1>
                    <div>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p><span>Category : </span>Women , T-Shirt, Crop Top</p>
                <p><span>Tags : </span>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
