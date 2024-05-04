import { Link } from 'react-router-dom';
import spslogo from '../assets/logos/SPSLogo.png';

const Header = () =>
{
    return (
        <div className="bg-blue-300 flex justify-between items-center text-center p-2 rounded-b-md">
            <div><Link to='/'><img src={spslogo} alt="logo" className='rounded-lg w-20 h-20'/></Link></div>            
            <div className="flex text-3xl">
                Siddhartha High School Reunion
            </div>
            <div className="flex justify-between space-x-5 text-xl">
                <a href="#features">Photo Gallery</a>
                <a href="#testimonials">Experiences</a>                
            </div>
        </div>
    );
}

export default Header;