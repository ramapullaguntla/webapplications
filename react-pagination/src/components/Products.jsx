import { useState } from "react";

const Products = ({productList}) =>
{
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize= 7;

    console.log("total products: ", productList.length);
    var totalPages = Math.ceil(productList.length / pageSize);

    console.log("total pages: ", totalPages);



    const renderProducts = () =>
    {
        return productList.map((eachProduct, index) =>
        {
            return <div key={index} className="bg-gray-500 rounded-md text-gray-100 text-lg py-1 my-2 text-center max-w-3xl">{eachProduct.title}</div>
        })
    };    

    const renderPage = () =>
    {
        var startIndex = (currentPage - 1) * pageSize;
        
        var pageList = productList.filter( (pr, index) => index >= startIndex && index < startIndex + pageSize);
        return pageList.map((eachProduct, index) =>
        {
            return <div key={index} className="bg-gray-500 rounded-md text-gray-100 text-lg py-1 my-2 text-center max-w-3xl">{eachProduct.id}. {eachProduct.title}</div>
        })
    };    

    const setPage = (buttonType) =>
    {
        if(buttonType === "First")
        {
            setCurrentPage(1);
        }
        else if(buttonType === "Last")
        {
            setCurrentPage(totalPages);
        }
        else if(buttonType === "Previous")
        {
            if(currentPage > 1)
            {
               setCurrentPage((page) => page - 1);
            }
        }
        else if(buttonType === "Next")
        {
            if(currentPage < totalPages)
            {
                setCurrentPage((page) => page + 1);
            }
           
        }
    }

    return (
        <div className="bg-slate-300 p-10 my-5 min-h-72">                
                 <div className="max-w-3xl mx-auto">{renderPage()}</div>
            <div className="flex justify-center my-4 p-2 max-w-3xl mx-auto">
                <button className="bg-blue-400 px-5 rounded-md mx-5" onClick={() => setPage("First")}>First</button>
                <button className="bg-blue-400 px-5 rounded-md mx-5" onClick={() => setPage("Previous")}>Previous</button>
                <button className="bg-blue-400 px-5 rounded-md mx-5" onClick={() => setPage("Next")}>Next</button>
                <button className="bg-blue-400 px-5 rounded-md mx-5" onClick={() => setPage("Last")}>Last</button>
            </div>
        </div>
    );
}

export default Products;