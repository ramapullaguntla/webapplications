import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fakeproductsApi } from '../../serverapi/contactsApi';
import { selectedProduct, removeSelectedProduct } from '../../redux/actions/productActions';

const ProductDetails = () =>
{
    
    const {productid} = useParams();
    const selectedProd = useSelector(state => state.selectedProduct);

    console.log("selected product: ", selectedProd);
    
    const dispatch = useDispatch();

    const getProductByID = async () => {
        const response = await fakeproductsApi.get(`/products/${productid}`).catch(err => console.log(err));

        console.log("selected product with id: ", response.data);
        if(response.data)
        {
            dispatch(selectedProduct(response.data));
        }
    }

    useEffect(() =>
    {
        if(productid && productid !== "")
        {        
            getProductByID();
        }

        return () => { dispatch(removeSelectedProduct())};

    }, [productid]);

    return(
        <div>
            {selectedProd.title ? (<div>
            <p>Product detail page for the product - {selectedProd.title}</p>
            <img src={selectedProd.image} width="120px" /></div>): <div><p>Loading.....</p></div>
            }
        </div>
    );

};

export default ProductDetails;