import React from 'react'
import { useNavigate } from 'react-router-dom';

function Staring() {
  const navigate = useNavigate();
    const startGame = ()=>{
        const red = 15000;
        const blue = 15000;
        const green = 15000;
        const yellow = 15000;
        localStorage.setItem('red', red);
        localStorage.setItem('blue', blue);
        localStorage.setItem('green', green);
        localStorage.setItem('yellow', yellow);
        navigate('/game');
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-600">
    <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg flex flex-col items-center gap-6">
        <h1 className='text-2xl'>শুরু করতে বোতামে ক্লিক করুন</h1>
        <button className="px-4 py-2 mt-4 w-1/2 text-white bg-green-500 rounded-lg font-bold text-lg"
        onClick={startGame} >
        শুরু করুন</button>
    </div>
    </div>
  )
}

export default Staring