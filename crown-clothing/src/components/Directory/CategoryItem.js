import { useNavigate } from 'react-router-dom';
import '../styles/CategoryItem.css'

const CategoryItem = ({item}) =>
{
    const navigate = useNavigate();
    const navigateHandler = () =>
    {
        navigate(item.route);
    }
    return(
        <div className="category-item" style={{ backgroundImage: `url(${item.imageUrl})`}}>

            <div className='category-item-body' onClick={navigateHandler}>
            <h1>{item.title}</h1>
             <p>Shop Now</p>
            </div>
        
        </div>
    );
}

export default CategoryItem;