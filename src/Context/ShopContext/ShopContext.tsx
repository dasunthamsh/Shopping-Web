import React, { createContext, ReactNode } from 'react';
import all_product from "../../Components/Assets/all_product";

interface ShopContextValue {
    all_product: any[];
}

export const ShopContext = createContext<ShopContextValue | null>(null);

interface ShopContextProviderProps {
    children: ReactNode;
}

const ShopContextProvider = (props: ShopContextProviderProps) => {
    const contextValue: ShopContextValue = { all_product };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
