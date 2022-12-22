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
        <div className="p-6">
           <h2 className="text-2xl font-bold text-center">{category.toLocaleUpperCase()}</h2>
           <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
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