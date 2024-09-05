import centerphoto from '../assets/olmphotos/GaneshChaturdi2024.jpg';
import flyer from '../assets/olmphotos/GaneshFlyer.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () =>
{
    return (
        <div className="max-w-3xl mx-auto my-10 flex flex-col items-center space-y-5 text-center p-4">
                <div><img src={flyer} alt="logo" className='rounded-lg'/></div>
                <div className='flex space-x-4'>
                    <Link to='/photos'><button className="bg-amber-500 py-2 px-2 rounded-lg text-gray-50">Photos</button></Link> 
                    <Link to='/events'><button className="bg-amber-500 py-2 px-2 rounded-lg text-gray-50">Events</button></Link> 
                    <Link to='/volunteer'><button className="bg-amber-500 py-2 px-2 rounded-lg text-gray-50">Volunteer</button></Link>
                    <Link to='/olmblogs'><button className="bg-amber-500 py-2 px-2 rounded-lg text-gray-50">Testimonials</button></Link>                                   
                </div>                       
            </div>
    );
};

export default HeroSection;