import Home from "./components/HomeComponent/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Authentication from "./components/authentication/Authentication";
import Shop from "./components/shop/Shop";
import Checkout from "./components/checkout/Checkout";
import { useEffect } from "react";
import { createUserDocument, onAuthStateChangedHandler } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";



const App = () =>
{     
  const dispatch = useDispatch();
   useEffect(() =>
   {
      const unsubscribe = onAuthStateChangedHandler( (user) =>
      {
          if(user)
          {
             createUserDocument(user);
          }

          dispatch(setCurrentUser(user));
      });

      return unsubscribe;
   }, [dispatch]

   );

  return(
       
        <Routes>
            <Route path="/" element={ <Navigation />}>
                <Route index element={ <Home />} />
                <Route path="shop/*" element={ <Shop />} />
                <Route path="auth" element={ <Authentication />} />
                <Route path="checkout" element={ <Checkout />} />
             </Route>
        </Routes>     
  
   );
}

export default App;