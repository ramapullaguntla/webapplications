

const CartItem = ({item}) =>
{
   return (
    <div style={{fontSize: '15px'}}>
        <div>{item.name}</div>
        <div>{item.qty} X {item.price}</div>
    </div>
   );
}

export default CartItem;