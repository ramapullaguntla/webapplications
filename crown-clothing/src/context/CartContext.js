import { createContext, useEffect, useState} from 'react';

const DefaultCartInfo =  {
    isOpen: false,
    cartItems: []
};



export const CartContext = createContext(
    {
        cartInfo: DefaultCartInfo,
        setCartInfo: () => {},
        addItemToCart: () => {},
        cartCount: 0
    }
);

export const CartProvider = ( {children}) =>
{
    const [cartInfo, setCartInfo] = useState(DefaultCartInfo);
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (cartItems, cartproductToAdd) =>
        {
             var foundCartItem = cartItems.find(ct => ct.id === cartproductToAdd.id);

             if(foundCartItem)
             {
                return cartItems.map( each =>
                    {
                        if(each.id === foundCartItem.id)
                        {
                            return {...each, qty: foundCartItem.qty + 1};
                        }
                        else{
                            return each;
                        }
                    });
             }
             else
             {
                return [...cartItems, {...cartproductToAdd, qty: 1}];
             }
        }

    const addItemToCart = (product) =>
    {
        const newcartItems = addToCart(cartInfo.cartItems, product);
        setCartInfo({...cartInfo, cartItems: newcartItems});
    };
    

    useEffect(() =>
    {
        const totalCount = cartInfo.cartItems.reduce((total, each) => total + each.qty, 0);
        setCartCount(totalCount);
    }, [cartInfo]);

    const value = {cartInfo, setCartInfo, addItemToCart, cartCount};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

