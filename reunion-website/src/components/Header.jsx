import { Link } from 'react-router-dom';
import spslogo from '../assets/logos/SPSLogo.png';

const Header = () =>
{
    return (
        <div className="bg-blue-300 flex justify-between items-center text-center p-2 rounded-b-md">
            <div><Link to='/'><img src={spslogo} alt="logo" className='rounded-lg w-20 h-20'/></Link></div>            
            <div className="flex text-2xl">Siddhartha High School Reunion</div>
            <div className="flex justify-between space-x-5 text-lg">
            <Link to='/photos'><div>Photo Gallery</div></Link>
            <Link to='/blogs'><div>Experiences</div></Link>   
            <Link to='/playgame'><div>Play Game</div></Link>           
            </div>
        </div>
    );
}

export default Header;