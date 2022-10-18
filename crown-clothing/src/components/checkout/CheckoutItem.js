import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../styles/checkout-item.css';

function CheckoutItem( {checkoutItem})
{
    const { addItemToCart, removeItemFromCart } = useContext(CartContext);

    const increment = (cartitem) =>
    {
        console.log(cartitem);
        addItemToCart(cartitem);
    }

    const decrement = (cartitem) =>
    {
        console.log(cartitem);
        removeItemFromCart(cartitem, false);
    }

    const removeItem = (cartitem) =>
    {
        console.log(cartitem);
        removeItemFromCart(cartitem, true); //remove the item completely
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