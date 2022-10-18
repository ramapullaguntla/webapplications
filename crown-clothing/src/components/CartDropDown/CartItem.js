

const CartItem = ({item}) =>
{
   return (
    <div style={{fontSize: '15px'}}>
        <div style={{display:'flex', alignContent:'center'}}>
            <img style={{height:'20px', width:'20px', marginRight: '5px'}} src={item.imageUrl} alt={item.name}></img>
            <div>{item.name}</div>
        </div>
        <div>{item.qty} X {item.price}</div>
    </div>
   );
}

export default CartItem;