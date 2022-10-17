import { createContext,  useEffect,  useState,  } from "react";
import {  getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext(
    {
        categoriesMap : {},
        setCategoriesMap : () => {}
    }
);

export const ProductsProvider = ({children}) =>
{
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategories = async () =>
        {
            const categoryMap = await getCollectionAndDocuments('collections');
            console.log("CategoryMap ", categoryMap);

            setCategoriesMap(categoryMap);
        };

        getCategories();
    }, []
         
    );

    const value = {categoriesMap, setCategoriesMap};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
}