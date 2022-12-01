import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/Cart/cart.action";
import { selectCartItems } from "../../store/Cart/cart.selector";


const ProductCard = ({product}) =>
{
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();


     const addThisToCart = () =>
     {        
        const addToCartAction = addToCart(product, cartItems);
        dispatch(addToCartAction);
     }
               
    return(
        <div>
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