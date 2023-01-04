
import '../styles/cart-dropdown.css';

const CartItem = ({item}) =>
{
   return (
    <div className='flex flex-col items-center space-y-1 mb-2'>
        <div className='flex items-center space-x-2'>
            <img className='w-3 h-3' src={item.imageUrl} alt={item.name}></img>
            <div className='text-sm font-thin'>{item.name}</div>  
        </div>
        <div className='text-xs font-thin'>{item.qty} X {item.price}</div>
    </div>
   );
}

export default CartItem;