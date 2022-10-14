import { createContext, useState} from 'react';

const DefaultCartInfo =  {
    isOpen: false,
    cartItems: []
};



export const CartContext = createContext(
    {
        cartInfo: DefaultCartInfo,
        setCartInfo: () => {},
        addItemToCart: () => {}
    }
);

export const CartProvider = ( {children}) =>
{
    const addItemToCart = (cartItems, productToAdd) =>
        {
            //check if the cartItems already has the product
            var findIndex = cartItems.findIndex(ct => ct.id === productToAdd.id);

            if(findIndex >= 0)
            {
                cartItems[findIndex].qty = cartItems[findIndex].qty + 1;
            }
            else
            {
                cartItems.push({...productToAdd, qty: 1 });
            }

            // setCartInfo({...cartInfo, cartItems: cartItems});
        }

    const [cartInfo, setCartInfo] = useState(DefaultCartInfo);
    const value = {cartInfo, setCartInfo, addItemToCart};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

