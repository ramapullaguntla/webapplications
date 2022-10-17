import { useContext } from 'react';
import {ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/CartContext';
import '../styles/cart-icon.css';



const CartIcon = () =>
{
    const { cartCount } = useContext(CartContext);    

    return (
        <div className='cart-icon-container'>
            <ShoppingCart />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
}

export default CartIcon;