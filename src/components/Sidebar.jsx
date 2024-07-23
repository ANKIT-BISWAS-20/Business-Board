import React from 'react'
import red from '../assets/red.svg';
import blue from '../assets/blue.svg';
import green from '../assets/green.svg';
import yellow from '../assets/yellow.svg';

function Sidebar({balance, setBalance}) {
    return (
        <div className=' w-full md:w-1/3 bg-white md:h-screen flex flex-col items-center pt-6'>
            <h1 className='text-3xl font-bold mt-4 mb-6'>খেলোয়াড়দের ব্যালেন্স</h1>
            <div className='w-full p-4 flex flex-col items-center gap-6'>
                <div className='rounded-lg border-4 border-red-500 w-full flex justify-between px-4'>
                    <div className='items-center flex'>
                        <img src={red} alt='লাল খেলোয়াড়' />
                        <p className='text-xl font-bold text-red-500 p-6'>
                            লাল খেলোয়াড়
                        </p>
                    </div>
                    <div className='items-center flex'>
                        <p className='text-3xl font-bold text-purple-600'>{balance[0]} ₹</p>
                    </div>
                </div>
                <div className='rounded-lg border-4 border-blue-500 w-full flex justify-between px-4'>
                    <div className='items-center flex'>
                        <img src={blue} alt='লাল খেলোয়াড়' />
                        <p className='text-xl font-bold text-blue-500 p-6'>
                            নীল খেলোয়াড়
                        </p>
                    </div>
                    <div className='items-center flex'>
                        <p className='text-3xl font-bold text-purple-600'>{balance[1]} ₹</p>
                    </div>
                </div>
                <div className='rounded-lg border-4 border-green-500 w-full flex justify-between px-4'>
                    <div className='items-center flex'>
                        <img src={green} alt='লাল খেলোয়াড়' />
                        <p className='text-xl font-bold text-green-500 p-6'>

                            সবুজ খেলোয়াড়
                        </p>
                    </div>
                    <div className='items-center flex'>
                        <p className='text-3xl font-bold text-purple-600'>{balance[2]} ₹</p>
                    </div>
                </div>
                <div className='rounded-lg border-4 border-yellow-500 w-full flex justify-between px-4'>
                    <div className='items-center flex'>
                        <img src={yellow} alt='লাল খেলোয়াড়' />
                        <p className='text-xl font-bold text-yellow-500 p-6'>

                            হলুদ খেলোয়াড়
                        </p>
                    </div>
                    <div className='items-center flex'>
                        <p className='text-3xl font-bold text-purple-600'>{balance[3]} ₹</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Sidebar