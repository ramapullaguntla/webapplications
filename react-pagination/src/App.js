import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import { useState } from 'react';
import { useEffect } from 'react';
import { productsApi } from './api/httpApi';

function App() {

  const [products, setProducts] = useState([]);

   const getProducts = async () =>
   {
        const productList = await productsApi.get();      
        return productList.data;
   };
  useEffect(() =>
  {
    console.log("use effect called");
      const getProds = async () =>
      {
          var retrieveProds = await getProducts();
          if(retrieveProds)
          {
             setProducts(retrieveProds);
          }
      };

      getProds();      
  }, []

  )

  return (
    <div className="max-w-7xl mx-auto text-center">        
        <Header></Header>
        <Products productList={products}></Products>
        <Footer></Footer>
    </div>
  );
}

export default App;
