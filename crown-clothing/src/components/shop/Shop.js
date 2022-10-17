
import { Route, Routes } from "react-router-dom";

import CategoryPreview from "../CategoryPreview/CategoryPreview";
import EachCategory from "../CategoryPreview/EachCategory";


const Shop = () =>
{
   
  return (
        <Routes>
          <Route index element={ <CategoryPreview />} />
          <Route path=":category" element={ <EachCategory />} />
        </Routes>
  );
}

export default Shop;