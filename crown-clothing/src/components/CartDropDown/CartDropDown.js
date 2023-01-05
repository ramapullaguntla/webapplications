import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/Cart/cart.selector';
import { toggleCartOpen } from '../../store/Cart/cart.action';

function CartDropDown() {

    //const { cartInfo } = useContext(CartContext);

    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const gotoCheckout = () =>
    {
        const toggleCart = toggleCartOpen();
        dispatch(toggleCart);

        navigate('/checkout');
    };

    return ( 
        <div className='bg-gray-200 flex flex-col space-y-6 text-sm p-2 rounded-lg h-72'>
           <div className='h-52 overflow-y-auto overflow-x-auto'>
              {
                cartItems.map( (eachItem) =>
                {
                    return <CartItem key={eachItem.id}  item={eachItem}/>;
                })
              }                
           </div>
           <button className='bg-gray-400 rounded-lg text-center py-2 mt-auto hover:bg-gray-300' onClick={gotoCheckout}>CheckOut</button>
        </div>
     );
}

export default CartDropDown;