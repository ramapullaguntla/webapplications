import { createContext, useState} from 'react';

const DefaultCartInfo =  {
    isOpen: false,
    currentItems: []
};

export const CartContext = createContext(
    {
        cartInfo: DefaultCartInfo,
        setCartInfo: null
    }
);

export const CartProvider = ( {children}) =>
{
    const [cartInfo, setCartInfo] = useState(DefaultCartInfo);
    const value = {cartInfo, setCartInfo};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

