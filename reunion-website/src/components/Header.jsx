import { Link } from 'react-router-dom';
import spslogo from '../assets/logos/SPSLogo.png';

const Header = () =>
{
    return (
        <div>
            <div className="xs:hidden sm:hidden  bg-cyan-500 md:flex justify-between items-center text-center p-2 rounded-b-md">
                <div><Link to='/'><img src={spslogo} alt="logo" className='rounded-lg w-20 h-20'/></Link></div>            
                <div className="text-2xl hidden md:block">Siddhartha High School Reunion</div>
                <div className="flex justify-between space-x-3 text-lg mx-1">
                <Link to='/'><div>Home</div></Link>
                <Link to='/photos'><div>Photos</div></Link>
                <Link to='/videos'><div>Videos</div></Link>
                <Link to='/blogs'><div>Testimonials</div></Link>   
                <Link to='/gameintro'><div>Game</div></Link>           
                </div>
            </div>

            <div className="xs:block sm:block md:hidden  bg-cyan-500  mx-auto text-center">
                <Link to='/'><button className="bg-cyan-500 p-2 text-lg">Home</button></Link>                                      
            </div>
        </div>
    );
}

export default Header;