import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fakeproductsApi } from '../../serverapi/contactsApi';
import { useDispatch, useSelector } from 'react-redux';
import  {setProducts, selectedProduct} from '../../redux/actions/productActions';

const ProductList = () =>
{
    //const [products, setProductData] = useState([]);

    const reduxproducts = useSelector((state) => state.allProducts.products); // this is how we read the state from redux
   
    const dispatch = useDispatch();
    console.log("products are ", reduxproducts);
    const getProducts = async () => 
    {
        var productlist = await fakeproductsApi.get("/products");
        if(productlist.data)
        {
           // setProducts(productlist.data); this is to set state
           dispatch(setProducts(productlist.data));
        }
    };

    useEffect(() =>
        {
            getProducts();
        },  []
    );

    const renderProducts = () =>
    {
        return(
        reduxproducts.map((prd, index) =>
        {
            return(<div key={index} style={{margin:'10px', height:'300px', width:'400px', border:'solid 2px red'}}> 
                    <div>{prd.title}</div>
                    <Link to={"/products/"+ prd.id} >
                        <img src={prd.image} width="100px"></img>
                    </Link>
                    </div>);
        })
        );
    }

    return(
        <div style={{display: 'flex', border:'solid 3px green', flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap', alignItems:'center'}}>{renderProducts()}</div>
    );
};

export default ProductList;