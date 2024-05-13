import centerphoto from '../assets/photos/Center.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () =>
{
    return (
        <div className="max-w-3xl mx-auto my-10 flex flex-col items-center space-y-5 text-center p-4">
                <div><img src={centerphoto} alt="logo" className='rounded-lg'/></div>
                <div className='flex space-x-4'>
                    <Link to='/photos'><button className="bg-cyan-500 py-2 px-2 rounded-lg">Photos</button></Link>
                    <Link to='/videos'><button className="bg-cyan-500 py-2 px-2 rounded-lg">Videos</button></Link>
                    <Link to='/blogs'><button className="bg-cyan-500 py-2 px-2 rounded-lg">Testimonials</button></Link>
                    <Link to='/gameintro'><button className="bg-cyan-500 py-2 px-2 rounded-lg">Game</button></Link>
                </div>                       
            </div>
    );
};

export default HeroSection;