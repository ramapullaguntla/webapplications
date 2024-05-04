import centerphoto from '../assets/Center.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () =>
{
    return (
        <div className="max-w-3xl mx-auto my-10 flex flex-col items-center space-y-5 text-center p-4">
                <div><img src={centerphoto} alt="logo" className='rounded-lg'/></div>                              
                <Link to='/photos'><button className="bg-cyan-500 py-3 px-12 rounded-full">Photo Gallery</button></Link>
            </div>
    );
};

export default HeroSection;