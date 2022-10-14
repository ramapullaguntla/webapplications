import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({product}) =>
{
    const { addItemToCart} = useContext(CartContext);

    const addThisToCart = () => 
    {      
        addItemToCart(product);
        
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