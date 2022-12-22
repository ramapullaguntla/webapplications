
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectCategoryMap } from "../../store/Categories/category.selector";
import ProductCard from "../Products/ProductCard";

const CategoryPreview = () => {
   
    const categoriesMap = useSelector(selectCategoryMap);  
    
    return <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-5">
              {
               Object.keys(categoriesMap).map((eachKey, index) =>
               {
                  return (
                      <div className="flex flex-col space-y-2" key={index}>
                          <Link className="text-xl font-bold text-center" to={eachKey}>{eachKey.toLocaleUpperCase()}</Link>
                          <div>                          
                          {
                            categoriesMap[eachKey].filter((it, index) => index < 2 ).map(eachItem =>
                              {
                                return <ProductCard key={eachItem.id} product={eachItem} />;
                              })
                          } 
                          </div>
                      </div>)
               })
              }                
           </div>;
}

export default CategoryPreview;