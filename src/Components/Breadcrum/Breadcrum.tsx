import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';

interface BreadcrumProps {
    product: {
        category: string;
        name: string;
        // Add other properties as needed
    };
}

const Breadcrum: React.FC<BreadcrumProps> = ({ product }) => {
    return (
        <div>
            HOME <img src={arrow_icon} alt="Arrow Icon" />
            SHOP <img src={arrow_icon} alt="Arrow Icon" />
            {product.category}
            <img src={arrow_icon} alt="Arrow Icon" />
            {product.name}
        </div>
    );
};

export default Breadcrum;
