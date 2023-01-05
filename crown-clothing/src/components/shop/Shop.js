
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getCategoriesMap } from "../../store/Categories/category.action";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

import CategoryPreview from "../CategoryPreview/CategoryPreview";
import EachCategory from "../CategoryPreview/EachCategory";


const Shop = () =>
{
   const dispatch = useDispatch();

   useEffect(() =>
   {
       const getCategories = async () =>
       {
          const categoryMap = await getCollectionAndDocuments('collections');
          dispatch(getCategoriesMap(categoryMap));
       };
       getCategories();

   }, [dispatch]

   );
  return (
        <Routes>
          <Route index element={ <CategoryPreview />} />
          <Route path=":category" element={ <EachCategory />} />
        </Routes>
  );
}

export default Shop;