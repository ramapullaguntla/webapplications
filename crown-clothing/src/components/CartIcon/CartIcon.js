import { useContext } from 'react';
import {ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/CartContext';
import '../styles/cart-icon.css';



const CartIcon = () =>
{
    const { cartInfo, cartCount } = useContext(CartContext);

    //we can do this at the context level which is shown above.
    const getTotalCount = () =>
    {

        var totalCount = cartInfo.cartItems.reduce((total, each) => total + each.qty, 0);
        // 
        return totalCount;
    };

    return (
        <div className='cart-icon-container'>
            <ShoppingCart />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
}

export default CartIcon;