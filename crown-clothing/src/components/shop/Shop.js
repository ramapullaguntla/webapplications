import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../Products/ProductCard";

const Shop = () =>
{
   
  const { products } = useContext(ProductContext);

  return <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            {products.map((each) => 
            {
                return <ProductCard key={each.id} product={each} />;
            })}
         </div>;
}

export default Shop;