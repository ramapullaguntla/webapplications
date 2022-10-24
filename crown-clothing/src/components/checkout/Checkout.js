
import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../store/Cart/cart.selector";
import '../styles/checkout.css';
import CheckoutItem from "./CheckoutItem";

function Checkout()
{
    //const { cartInfo, totalPrice } = useContext(CartContext);

    const totalPrice = useSelector(selectCartTotal);
    const cartItems = useSelector(selectCartItems);

    const headingArray = [ "Item", "Description", "Qty", "Price", "Remove"];  

    return ( 
        <div>
            <div style={{padding:'15px'}}>
            <div className="heading-container">
                    {
                    headingArray.map( (each, index) =>
                        {
                            return <div key={index} className="heading">{each}</div>
                        })
                    }               
                    
            </div>
            <div className="checkout-container">
            {
                cartItems.map( each => {
                    return <CheckoutItem key={each.id} checkoutItem={each} />
                })
            }
            </div>
            <div style={{textAlign:"center", fontSize: '40px' }}>Total: ${totalPrice}</div>
            </div>
        </div>
     );
}

export default Checkout;