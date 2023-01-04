
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/Cart/cart.selector";
import CheckoutItem from "./CheckoutItem";

function Checkout()
{
    //const { cartInfo, totalPrice } = useContext(CartContext);

    const totalPrice = useSelector(selectCartTotal);
    const cartItems = useSelector(selectCartItems);

    const headingArray = [ "Item", "Description", "Qty", "Price", "Remove"];  

    return ( 
        <div className="m-4">            
            <div className="flex justify-between space-x-3 my-2 p-3">
                    {
                    headingArray.map( (each, index) =>
                        {
                            return <div key={index} className="heading">{each}</div>
                        })
                    }               
                    
            </div>
            <div className="max-h-72 overflow-auto">
            {
                cartItems.map( each => {
                    return <CheckoutItem key={each.id} checkoutItem={each} />
                })
            }
            </div>
            <div className="text-2xl p-2 font-bold text-center">Total: ${totalPrice}</div>            
        </div>
     );
}

export default Checkout;