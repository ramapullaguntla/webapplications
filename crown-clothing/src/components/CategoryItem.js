import './CategoryItem.css';

const CategoryItem = ({item}) =>
{
    return(
        <div className="category-item">

            <div className='category-item-body'>
            <h1>{item.title}</h1>
             <p>Shop Now</p>
            </div>
        
        </div>
    );
}

export default CategoryItem;