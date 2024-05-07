import { Link } from 'react-router-dom';

const GameIntro = () =>
{
    return (
        <div className="max-w-3xl mx-auto my-10 flex flex-col items-center space-y-5 text-center p-4">
                <div className='text-lg font-semibold'>
                    How well do you know your fellow students from Siddhartha 1998 batch ?
                </div>
                <div className='text-lg font-semibold'><p>
                    Are you interested in playing a small game to identify them by their 1998 pictures ?
                    </p>
                </div>
                <div className='text-lg font-semibold'>Click the Start Game button below to play the game.</div>
                <div className='flex'>                    
                    <Link to='/playgame'><button className="bg-cyan-500 py-2 px-8 rounded-lg">Start Game</button></Link>
                </div>                       
            </div>
    );
}

export default GameIntro;