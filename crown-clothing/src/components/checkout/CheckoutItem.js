import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/Cart/cart.action';
import { selectCartItems } from '../../store/Cart/cart.selector';

function CheckoutItem( {checkoutItem})
{
   // const { addItemToCart, removeItemFromCart } = useContext(CartContext);

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();    
    const increment = (cartitem) =>
    {
        console.log(cartitem);
               
        var addToCartAction = addToCart(cartitem, cartItems);
        dispatch(addToCartAction);
    }

    const decrement = (cartitem) =>
    {
        console.log(cartitem);

        var removeFromCartAction = removeFromCart(cartitem, cartItems, false);
        dispatch(removeFromCartAction);
    }

    const removeItem = (cartitem) =>
    {
        console.log(cartitem);
        var clearItemAction = removeFromCart(cartitem, cartItems, true);
        dispatch(clearItemAction);
    }

    const { name, imageUrl, price, qty} = checkoutItem;


    return ( 
        <div className='flex justify-between m-4 py-4 border-b-2'>
            <img className='w-5 h-5' src={imageUrl} alt={name}/>
            <div className='text-sm'>{name}</div>
            <div className='flex space-x-1'>
                <div className='cursor-pointer' onClick={() => decrement(checkoutItem)}>&#10094;</div>
                    <div className='font-bold'>{qty}</div>
                <div className='cursor-pointer' onClick={() => increment(checkoutItem)}>&#10095;</div>  
            </div>
            <div>${price}</div>
            <div className='font-bold cursor-pointer' onClick={() => removeItem(checkoutItem)}>&#10005;</div>
      </div>
     );
}

export default CheckoutItem;