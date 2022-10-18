import { createContext,  useEffect,  useState,  } from "react";
import {  getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext(
    {
        categoriesMap : {}        
    }
);

export const CategoriesProvider = ({children}) =>
{
    const [categoriesMap, setCategoriesMap] = useState({});

    console.log("Reached Category Context");

    useEffect(() => {

        console.log("Reached Category Context - Use Effect");
        const getCategories = async () =>
        {
            const categoryMap = await getCollectionAndDocuments('collections');
            console.log("CategoryMap in context ", categoryMap);

            setCategoriesMap(categoryMap);
        };

        getCategories();
    }, []
         
    );

    const value = {categoriesMap};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
}