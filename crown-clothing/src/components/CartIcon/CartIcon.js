import {ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg';
import '../styles/cart-icon.css';


const CartIcon = () =>
{
    return (
        <div className='cart-icon-container'>
            <ShoppingCart />
            <span className='item-count'>1</span>
        </div>
    );
}

export default CartIcon;