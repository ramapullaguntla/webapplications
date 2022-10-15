import '../styles/cart-dropdown.css'

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

function CartDropDown() {

    const { cartInfo } = useContext(CartContext);

    const navigate = useNavigate();

    const gotoCheckout = () =>
    {
        navigate('/checkout');
    };

    return ( 
        <div className="cart-dropdown-container">
           <div className='cart-items'>
              {
                cartInfo.cartItems.map( (eachItem) =>
                {
                    return <CartItem key={eachItem.id}  item={eachItem}/>;
                })
              }
              <button onClick={gotoCheckout}>CheckOut</button>  
           </div>
        </div>
     );
}

export default CartDropDown;