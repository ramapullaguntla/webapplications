import Home from "./components/HomeComponent/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Authentication from "./components/authentication/Authentication";


const Shop = () =>
{
  return <div>This is a shop</div>;
}


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