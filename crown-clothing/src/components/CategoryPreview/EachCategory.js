import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/ProductContext";
import ProductCard from "../Products/ProductCard";

const EachCategory = () => {
    
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);    
      
    return( 
        <div style={{textAlign:'center', marginBottom:'40px'}}>
           <h2>{category.toLocaleUpperCase()}</h2>
           <div style={{ display: 'flex',  justifyContent: 'flex-start', flexWrap: 'wrap', margin:'50px'}}>
              {                                      
                  categoriesMap[category].map(eachItem =>
                    {
                      return <ProductCard key={eachItem.id} product={eachItem} />;
                    })                                
              }
                
           </div>
           </div>);
}

export default EachCategory;