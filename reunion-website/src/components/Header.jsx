import { Link } from 'react-router-dom';
import spslogo from '../assets/logos/OMLogo.png';

const Header = () =>
{
    return (
        <div>
            <div className="xs:hidden sm:hidden  bg-amber-500 md:flex justify-between items-center text-center p-2 rounded-b-md">
                <div><Link to='/'><img src={spslogo} alt="logo" className='rounded-lg w-24 h-20'/></Link></div>            
                <div className="text-3xl hidden md:block">Oaklawn Mills Ganesh Chaturdi Celebrations</div>
                <div className="flex justify-between space-x-3 text-lg mx-1">
                <Link to='/'><div>Home</div></Link>
                <Link to='/photos'><div>Photos</div></Link>  
                <Link to='/events'><div>Events</div></Link> 
                <Link to='/volunteer'><div>Volunteer</div></Link>              
                <Link to='/olmblogs'><div>Testimonials</div></Link>                   
                </div>
            </div>

            <div className="xs:block sm:block md:hidden  bg-amber-500  mx-auto text-center p-2 flex">
                <Link to='/'><button className="bg-amber-500 p-2 text-lg">Home</button></Link>                                                     
            </div>
        </div>
    );
}

export default Header;