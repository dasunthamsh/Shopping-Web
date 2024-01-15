import React, { createContext, ReactNode } from 'react';
import all_product from '../../Components/Assets/all_product';

interface ShopContextProps {
    children: ReactNode;
}

interface ContextValue {
    all_product: any; // You should replace 'any' with the actual type of 'all_product'
}

export const ShopContext = createContext<ContextValue | null>(null);

const ShopContextProvider: React.FC<ShopContextProps> = (props) => {
    const contextValue: ContextValue = { all_product };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
