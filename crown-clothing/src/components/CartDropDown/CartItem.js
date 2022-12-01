
import '../styles/cart-dropdown.css';

const CartItem = ({item}) =>
{
   return (
    <div className='each-cart-item'>
        <div className='cart-name-and-image'>
            <img style={{height:'15px', width:'15px'}} src={item.imageUrl} alt={item.name}></img>
            <div>{item.name}</div>            
        </div>
        <div className='each-qty-price'>{item.qty} X {item.price}</div>
    </div>
   );
}

export default CartItem;