import { useNavigate } from 'react-router-dom';

const CategoryItem = ({item}) =>
{
    const navigate = useNavigate();
    const navigateHandler = () =>
    {
        navigate(item.route);
    }
    return(
        <div className="flex flex-col items-center p-14 text-center" style={{ backgroundImage: `url(${item.imageUrl})`}}>
            <div className='cursor-pointer border-2 border-gray-600 p-4' onClick={navigateHandler}>
                <h1 className='text-2xl font-bold uppercase'>{item.title}</h1>
                <p className='text-lg font-semibold'>Shop Now</p>
            </div>
        
        </div>
    );
}

export default CategoryItem;