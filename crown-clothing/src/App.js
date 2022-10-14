import Home from "./components/HomeComponent/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Authentication from "./components/authentication/Authentication";
import Shop from "./components/shop/Shop";





const App = () =>
{     
  return(
       
        <Routes>
            <Route path="/" element={ <Navigation />}>
                <Route index element={ <Home />} />
                <Route path="shop" element={ <Shop />} />
                <Route path="auth" element={ <Authentication />} />
             </Route>
        </Routes>     
  
   );
}

export default App;