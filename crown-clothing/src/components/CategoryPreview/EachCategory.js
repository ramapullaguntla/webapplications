import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/ProductContext";
import ProductCard from "../Products/ProductCard";

const EachCategory = () => {
    
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);    
      
    return <div style={{ display: 'flex',  justifyContent: 'flex-start', flexWrap: 'wrap'}}>
              {                                      
                  categoriesMap[category].map(eachItem =>
                    {
                      return <ProductCard key={eachItem.id} product={eachItem} />;
                    })                                
              }
                
           </div>;
}

export default EachCategory;