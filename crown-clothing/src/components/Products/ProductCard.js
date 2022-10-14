import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({product}) =>
{
    const { cartInfo, addItemToCart, setCartInfo} = useContext(CartContext);

    const addThisToCart = () => 
    {
        var tempItems = cartInfo.cartItems;
        addItemToCart(tempItems, product);
       
        setCartInfo({...cartInfo, cartItems:tempItems});
        console.log(cartInfo);
        
    }

    return(
        <div style={{ margin: '50px'}}>
            <img src={product.imageUrl} alt={product.name} style={{height: '80px', width: '80px'}}></img>
            <div><span>{product.name}</span></div>
            
            <div><span>${product.price}</span></div>
            <div>
                <button onClick={addThisToCart}>Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;