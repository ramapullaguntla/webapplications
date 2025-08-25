import { Link } from 'react-router-dom';
import spslogo from '../assets/logos/OMLogo.png';

const Header = () =>
{
    return (
        <div className='text-gray-50'>
            <div className="xs:hidden sm:hidden  bg-header-brown md:flex justify-between items-center text-center p-2 rounded-b-md">
                <div><Link to='/'><img src={spslogo} alt="logo" className='rounded-lg w-24 h-20'/></Link></div>            
                <div className="text-3xl hidden md:block">Oaklawn Mills Ganesh Chaturdi Celebrations 2025</div>
                <div className="flex justify-between space-x-3 text-lg mx-1">
                <Link to='/'><div>Home</div></Link>
                <Link to='/photos'><div>Photos</div></Link>  
                <Link to='/events'><div>Events</div></Link> 
                <Link to='/volunteer'><div>Volunteer</div></Link>                                             
                </div>
            </div>

            <div className="xs:block sm:block md:hidden  bg-header-brown  mx-auto text-center p-1 flex">
                <Link to='/'><button className="bg-header-brown p-2 text-lg">Home</button></Link>                                                     
            </div>
        </div>
    );
}

export default Header;