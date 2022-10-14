const ProductCard = ({product}) =>
{
    
    return(
        <div style={{ margin: '50px'}}>
            <img src={product.imageUrl} alt={product.name} style={{height: '80px', width: '80px'}}></img>
            <div><span>{product.name}</span></div>
            
            <div><span>${product.price}</span></div>
            <div>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;