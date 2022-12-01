import '../styles/cart-dropdown.css'
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/Cart/cart.selector';

function CartDropDown() {

    //const { cartInfo } = useContext(CartContext);

    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    const gotoCheckout = () =>
    {
        navigate('/checkout');
    };

    return ( 
        <div className="cart-dropdown-container">
           <div className='cart-items'>
              {
                cartItems.map( (eachItem) =>
                {
                    return <CartItem key={eachItem.id}  item={eachItem}/>;
                })
              }                
           </div>
           <button onClick={gotoCheckout}>CheckOut</button>
        </div>
     );
}

export default CartDropDown;