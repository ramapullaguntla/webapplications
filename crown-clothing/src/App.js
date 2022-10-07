import Home from "./components/HomeComponent/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";


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
             </Route>
        </Routes>        
   );
}

export default App;