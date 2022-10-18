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
        removeItemFromCart: () => {},
        cartCount: 0,
        totalPrice: 0,
    }
);

export const CartProvider = ( {children}) =>
{
    const [cartInfo, setCartInfo] = useState(DefaultCartInfo);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

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

        const removeFromCart = (cartItems, cartproductToRemove, clearItem) =>
        {
             var foundCartItem = cartItems.find(ct => ct.id === cartproductToRemove.id);

             if(foundCartItem.qty === 1 || clearItem)
             {
                return cartItems.filter( each => each.id !== foundCartItem.id);                   
             }
             else
             {
                return cartItems.map( each =>
                    {
                        if(each.id === foundCartItem.id)
                        {
                            return {...each, qty: foundCartItem.qty - 1};
                        }
                        else{
                            return each;
                        }
                    });
             }
        }

    const addItemToCart = (product) =>
    {
        const newcartItems = addToCart(cartInfo.cartItems, product);
        setCartInfo({...cartInfo, cartItems: newcartItems});
    };
    
    const removeItemFromCart = (product, clearItem) =>
    {
        const newcartItems = removeFromCart(cartInfo.cartItems, product, clearItem);
        setCartInfo({...cartInfo, cartItems: newcartItems});
    };

    useEffect(() =>
    {
        const totalCount = cartInfo.cartItems.reduce((total, each) => total + each.qty, 0);
        setCartCount(totalCount);

        const price = cartInfo.cartItems.reduce((totalprice, each) => totalprice + (each.price * each.qty), 0);
        setTotalPrice(price);
    }, [cartInfo]);

    const value = {cartInfo, setCartInfo, addItemToCart, removeItemFromCart, cartCount, totalPrice};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

