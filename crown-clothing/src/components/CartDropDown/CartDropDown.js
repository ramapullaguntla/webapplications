import '../styles/cart-dropdown.css'

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

function CartDropDown() {

    const { cartInfo } = useContext(CartContext);

    return ( 
        <div className="cart-dropdown-container">
           <div className='cart-items'>
              {
                cartInfo.cartItems.map( (eachItem) =>
                {
                    return <CartItem key={eachItem.id}  item={eachItem}/>;
                })
              }
                <button className=''>CheckOut</button>
           </div>
        </div>
     );
}

export default CartDropDown;