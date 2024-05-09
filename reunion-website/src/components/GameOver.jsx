import { Link, useLocation } from 'react-router-dom';

const GameOver = (props) =>
{
    const location = useLocation();
    return (
        <div className="max-w-3xl mx-auto my-10 flex flex-col items-center space-y-5 text-center p-4">
                <div className='text-2xl font-bold text-gray-800'>
                    Game Over
                </div>
                <div className='text-xl flex space-x-5'>
                    <div>Your score :</div>
                    <div className={ location.state.finalscore > 6 ? 'text-green-500' : 'text-red-500'}>{location.state.finalscore} out of 10</div>
                </div>                
                <div className='flex space-x-4'>                    
                    <Link to='/playgame'><button className="bg-cyan-500 py-1 px-8 rounded-lg">Play Again</button></Link>
                    <Link to='/'><button className="bg-cyan-500 py-1 px-8 rounded-lg">Go to Home</button></Link>
                </div>                       
            </div>
    );
}

export default GameOver;