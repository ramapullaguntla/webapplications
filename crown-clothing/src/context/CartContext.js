import { createContext, useEffect, useReducer} from 'react';

const DefaultCartInfo =  {
    isOpen: false,
    cartItems: []
};



export const CartContext = createContext(
    {
        cartInfo: DefaultCartInfo,
        toggleCart: () => {},
        addItemToCart: () => {},
        removeItemFromCart: () => {},
        cartCount: 0,
        totalPrice: 0,
    }
);

const CART_ACTION_TYPES =
{
    'SET_CART_ITEMS' : 'SET_CART_ITEMS',
    'TOGGLE_CART' : 'TOGGLE_CART'
};

const CART_INITIAL_STATE = {
    cartCount: 0,
    totalPrice: 0,
    cartInfo: DefaultCartInfo
}

export const CartReducer = (state, action) =>
{
    const {type, payload} = action;

    switch(type)
    {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state, ...payload
            }
        case CART_ACTION_TYPES.TOGGLE_CART:
            let isopen = state.cartInfo.isOpen;

            return {
                ...state, cartInfo: {...state.cartInfo, isOpen: !isopen}
            }
        default:
            throw new Error("Undefined type");
    }
}

export const CartProvider = ( {children}) =>
{
    const [ state, dispatch] = useReducer(CartReducer, CART_INITIAL_STATE);

    const { cartCount, totalPrice, cartInfo } = state;


    const setCartInfo = (newCartItems) =>
    {
        const totalCount = newCartItems.reduce((total, each) => total + each.qty, 0);       

        const price = newCartItems.reduce((totalprice, each) => totalprice + (each.price * each.qty), 0);

        dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS, 
            payload: {
                cartCount: totalCount,
                totalPrice: price, 
                cartInfo: { isOpen: true, cartItems: newCartItems}
            }});
    };

    const toggleCart = () =>
    {
        dispatch({type: CART_ACTION_TYPES.TOGGLE_CART, payload: null});
    }

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
        };

    const addItemToCart = (product) =>
    {
        const newcartItems = addToCart(cartInfo.cartItems, product);
        console.log(newcartItems);
        setCartInfo(newcartItems);
    };
    
    const removeItemFromCart = (product, clearItem) =>
    {
        const newcartItems = removeFromCart(cartInfo.cartItems, product, clearItem);
        setCartInfo(newcartItems);
    };
  
    const value = {cartInfo, toggleCart, addItemToCart, removeItemFromCart, cartCount, totalPrice};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

