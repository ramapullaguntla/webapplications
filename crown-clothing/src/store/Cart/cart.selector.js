export const selectCartStatus = (state) => state.cart.cartInfo.isOpen; //here we are using state.cart because it is a sub-reducer of "cart"

export const selectCartCount = (state) => 
{    
   return state.cart.cartInfo.cartItems.reduce( (itemcount, each) => itemcount + each.qty, 0);
}

export const selectCartItems = (state) => state.cart.cartInfo.cartItems;

export const selectCartTotal = (state) => 
{
    return state.cart.cartInfo.cartItems.reduce((totalCost, each) => totalCost + (each.qty * each.price), 0);
} 