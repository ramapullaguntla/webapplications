import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../context/CategoryContext";
import ProductCard from "../Products/ProductCard";

const CategoryPreview = () => {
   
    const { categoriesMap } = useContext(CategoriesContext);  
    
    return <div style={{ display: 'flex', flexDirection:'column' , justifyContent: 'center', flexWrap: 'wrap'}}>
              {
               Object.keys(categoriesMap).map((eachKey, index) =>
               {
                  return (
                      <div style={{textAlign:'center', marginBottom:'40px'}} key={index}><Link to={eachKey}>{eachKey.toLocaleUpperCase()}</Link>
                      <div  style={{display: 'flex', justifyContent:'center', margin: '30px'}}>
                          
                          {
                            categoriesMap[eachKey].filter((it, index) => index < 4 ).map(eachItem =>
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