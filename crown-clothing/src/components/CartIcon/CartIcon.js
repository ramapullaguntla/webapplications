import { useSelector } from 'react-redux';
import {ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg';
import { selectCartCount } from '../../store/Cart/cart.selector';
import '../styles/cart-icon.css';



const CartIcon = () =>
{
    
    const cartTotal = useSelector(selectCartCount);

    return (
        <div className='cart-icon-container'>
            <ShoppingCart />
            <span className='item-count'>{cartTotal}</span>
        </div>
    );
}

export default CartIcon;