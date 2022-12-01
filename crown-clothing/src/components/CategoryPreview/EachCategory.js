import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoryMap } from "../../store/Categories/category.selector";
import ProductCard from "../Products/ProductCard";

const EachCategory = () => {
    
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoryMap); 
    const [products, setProducts] = useState(categoriesMap);

    useEffect(
        () =>
        {
            const setProds = async () =>
            {
                 await setProducts(categoriesMap[category]);
                 console.log("Use effect ", categoriesMap[category]);
            };
            setProds();
        }, [category, categoriesMap]
    );
    
    console.log(category);
    console.log("category map in page", categoriesMap);
    console.log("Products in page ", products);
    return( 
        <div style={{textAlign:'center', marginBottom:'40px'}}>
           <h2>{category.toLocaleUpperCase()}</h2>
           <div style={{ display: 'flex',  justifyContent: 'space-around', flexWrap: 'wrap', margin:'60px'}}>
              {                                      
                  categoriesMap[category] ? categoriesMap[category].map(eachItem =>
                    {
                      return <ProductCard key={eachItem.id} product={eachItem} />;
                    })   :  <div>Loading...</div>
              }
                
           </div>
           </div>);
}

export default EachCategory;