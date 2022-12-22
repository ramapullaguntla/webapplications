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
        <div className="flex flex-col items-center p-3 mb-5">
            <img className="w-20 h-20" src={product.imageUrl} alt={product.name}></img>
            <div className="text-sm">{product.name} - ${product.price}</div>                   
            <button className="bg-slate-500 rounded-md text-black py-1 text-center" onClick={addThisToCart}>Add To Cart</button>
        </div>
    );
};

export default ProductCard;