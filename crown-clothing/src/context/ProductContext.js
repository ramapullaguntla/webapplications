import { createContext, useContext, useState,  } from "react";
import SHOP_DATA from '../shop-data.json'

export const ProductContext = createContext(
    {
        products : SHOP_DATA,
        setProducts : () => {}
    }
);

export const ProductsProvider = ({children}) =>
{
    const [products, setProducts] = useState(SHOP_DATA);

    const value = {products, setProducts};
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}