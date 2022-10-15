import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import '../styles/checkout.css';
import CheckoutItem from "./CheckoutItem";

function Checkout()
{
    const { cartInfo, cartCount, totalPrice } = useContext(CartContext);

    const headingArray = [ "Item", "Description", "Qty", "Price", "Remove"];  

    return ( 
        <div>
            <div className="heading-container">
                    {
                    headingArray.map( (each, index) =>
                        {
                            return <div key={index} className="heading">{each}</div>
                        })
                    }               
                    
            </div>
            {
                cartInfo.cartItems.map( each => {
                    return <CheckoutItem key={each.id} checkoutItem={each} />
                })
            }
            <div style={{textAlign:"center", fontSize: '40px' }}>Total: ${totalPrice}</div>
        </div>
     );
}

export default Checkout;