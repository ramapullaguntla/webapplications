import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/Cart/cart.action';
import { selectCartItems } from '../../store/Cart/cart.selector';
import '../styles/checkout-item.css';

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
        <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={name}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => decrement(checkoutItem)}>&#10094;</div>
                <span style={{marginLeft: '10px', marginRight: '10px'}}>{qty}</span>
            <div className='arrow' onClick={() => increment(checkoutItem)}>&#10095;</div>  
        </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={() => removeItem(checkoutItem)}>&#10005;</div>
      </div>
     );
}

export default CheckoutItem;