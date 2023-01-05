import { useSelector } from 'react-redux';
import {ReactComponent as ShoppingCart} from '../../assets/shopping-bag.svg';
import { selectCartCount } from '../../store/Cart/cart.selector';



const CartIcon = () =>
{    
    const cartTotal = useSelector(selectCartCount);

    return (
        <div className='cursor-pointer relative text-white w-10 h-10'>
            <ShoppingCart />
            <span className='text-sm font-bold absolute right-4 top-3'>{cartTotal}</span>
        </div>
    );
}

export default CartIcon;