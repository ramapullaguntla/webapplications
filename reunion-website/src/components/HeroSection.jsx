import flyer from '../assets/olmphotos/GaneshFlyer.png';
import { Link } from 'react-router-dom';

const HeroSection = () =>
{
    return (
        <div className="max-w-4xl mx-auto my-10 flex flex-col items-center space-y-2 text-center p-2">
                <div className='flex flex-wrap justify-around  p-1 w-full'>
                    <img src={flyer} alt="logo" className='rounded-lg w-[370px] h-[490px] mb-1'/>                    
                 </div>
                <div className='flex space-x-4'>
                    <Link to='/photos'><button className="bg-header-brown py-2 px-2 rounded-lg text-gray-50">Photos</button></Link> 
                    <Link to='/events'><button className="bg-header-brown py-2 px-2 rounded-lg text-gray-50">Events</button></Link> 
                    <Link to='/volunteer'><button className="bg-header-brown py-2 px-2 rounded-lg text-gray-50">Volunteer</button></Link>
                    
                </div>                       
            </div>
    );
};

export default HeroSection;
