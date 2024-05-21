import { Link } from 'react-router-dom';

const Header = () =>
{
    return (
        <div>
            <div className=" bg-cyan-500 md:flex justify-between items-center text-center p-2 rounded-b-md">                          
                <div className="text-2xl hidden md:block">Welcome to Damage Detector</div>
                <div className="flex justify-between space-x-3 text-lg mx-1">
                <Link to='/'><div>Home</div></Link>
                <Link to='/detector'><div>Damage Detector</div></Link>                       
                </div>
            </div>

            <div className="xs:block sm:block md:hidden  bg-cyan-500  mx-auto text-center p-2">
                <Link to='/'><button className="bg-cyan-500 p-2 text-lg">Home</button></Link>                                      
            </div>
        </div>
    );
}

export default Header;