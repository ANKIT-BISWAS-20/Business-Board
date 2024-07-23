import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
import red from './assets/red.svg';
import blue from './assets/blue.svg';
import green from './assets/green.svg';
import yellow from './assets/yellow.svg';
import arrow from './assets/arrow.png';
import bank from './assets/bank.png';


const QrScanner = () => {
    const [data, setData] = useState('No result');
    const [card1, setCard1] = useState('');
    const [card2, setCard2] = useState('');
    const [step, setStep] = useState(0);
    const [balance, setBalance] = useState([]);
    const [amount, setAmount] = useState(0);
    const [status, setStatus] = useState(false);

    const fetchBalance = async () => {
        const red = localStorage.getItem('red');
        const blue = localStorage.getItem('blue');
        const green = localStorage.getItem('green');
        const yellow = localStorage.getItem('yellow');
        setBalance([red, blue, green, yellow]);
    }

    const diposite = () => {
        const substractAmount = parseInt(amount);
        const thisCard = card1;
        localStorage.setItem(thisCard, parseInt(localStorage.getItem(thisCard)) - substractAmount);
        fetchBalance();
        window.location.reload();
    }

    const withdraw = () => {
        const addAmount = parseInt(amount);
        const thisCard = card1;
        localStorage.setItem(thisCard, parseInt(localStorage.getItem(thisCard)) + addAmount);
        fetchBalance();
        window.location.reload();
    }

    const transfer = () => {
        const substractAmount = parseInt(amount);
        const thisCard = card1;
        const thatCard = card2;
        localStorage.setItem(thisCard, parseInt(localStorage.getItem(thisCard)) - substractAmount);
        localStorage.setItem(thatCard, parseInt(localStorage.getItem(thatCard)) + substractAmount);
        fetchBalance();
        window.location.reload();
    }

    useEffect(() => {
        fetchBalance();
    }, []);

    return (
        <div className="md:flex items-center justify-center min-h-screen bg-purple-600">
            <Sidebar balance={balance} setBalance={setBalance} />
            <div className='w-full md:w-2/3 mt-12 md:mt-0 px-8'>
                {step == 1 && card1 == '' &&
                    <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
                        <h1 className="text-2xl font-bold text-center mt-8">ক্যামেরার সামনে আপনার কার্ড রাখুন</h1>
                        <QrReader
                            onResult={(result, error) => {
                                if (!!result) {
                                    setData(result?.text);
                                    setCard1(result?.text);
                                }
                                if (!!error) {
                                    console.info(error);
                                }
                            }}
                            style={{ width: '100%' }}

                        />
                        <button onClick={() => window.location.reload()} className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg">Stop Scanning</button>
                    </div>
                }
                {step == 1 && card1 !== '' &&
                    <div className="w-full p-6 bg-white shadow-md rounded-lg text-center items-center">

                        <div className='flex justify-center'>
                            <div className='flex items-center gap-4'>
                                <img src={card1 === 'red' ? red : card1 === 'blue' ? blue : card1 === 'green' ? green : yellow} alt='কার্ড' />
                                <h1 className={`text-2xl font-bold text-center text-${card1}-500`}>{card1 === 'red' ? 'লাল খেলোয়াড়' : card1 === 'blue' ? 'নীল খেলোয়াড়' : card1 === 'green' ? 'সবুজ খেলোয়াড়' : 'হলুদ খেলোয়াড়'}</h1>
                            </div>
                            <div className='mx-8'>
                                <img src={arrow} alt='কার্ড' height={50} width={150} />
                            </div>
                            <div>
                                <img src={bank} alt='কার্ড' height={150} width={150} />
                            </div>

                        </div>
                        <div className='flex justify-center gap-6 '>
                            <input className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-2xl text-center"
                                id="username"
                                type="text"
                                placeholder="পরিমান লিখুন"
                                onChange={(e) => setAmount(e.target.value)}
                                value={amount}
                            />
                            <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg font-bold"
                                onClick={diposite}
                            >জমা দিন</button>
                        </div>
                    </div>
                }
                {step == 2 && card1 == '' &&
                    <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
                        <h1 className="text-2xl font-bold text-center mt-8">ক্যামেরার সামনে আপনার কার্ড রাখুন</h1>
                        <QrReader
                            onResult={(result, error) => {
                                if (!!result) {
                                    setData(result?.text);
                                    setCard1(result?.text);
                                }
                                if (!!error) {
                                    console.info(error);
                                }
                            }}
                            style={{ width: '100%' }}

                        />
                        <button onClick={() => window.location.reload()} className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg">Stop Scanning</button>
                    </div>
                }
                {step == 2 && card1 !== '' &&
                    <div className="w-full p-6 bg-white shadow-md rounded-lg text-center items-center">

                        <div className='flex justify-center'>
                            <div>
                                <img src={bank} alt='কার্ড' height={150} width={150} />
                            </div>
                            <div className='mx-8'>
                                <img src={arrow} alt='কার্ড' height={50} width={150} />
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={card1 === 'red' ? red : card1 === 'blue' ? blue : card1 === 'green' ? green : yellow} alt='কার্ড' />
                                <h1 className={`text-2xl font-bold text-center text-${card1}-500`}>{card1 === 'red' ? 'লাল খেলোয়াড়' : card1 === 'blue' ? 'নীল খেলোয়াড়' : card1 === 'green' ? 'সবুজ খেলোয়াড়' : 'হলুদ খেলোয়াড়'}</h1>
                            </div>

                        </div>
                        <div className='flex justify-center gap-6 '>
                            <input className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-2xl text-center"
                                id="username"
                                type="text"
                                placeholder="পরিমান লিখুন"
                                onChange={(e) => setAmount(e.target.value)}
                                value={amount}
                            />
                            <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded-lg font-bold"
                                onClick={withdraw}
                            >টাকা তুলে নিন</button>
                        </div>
                    </div>
                }
                {step == 3 && card1 == '' && card2 == '' &&
                    <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg text-center">
                        <h1 className="text-2xl font-bold text-center mt-8">ক্যামেরার সামনে আপনার কার্ড রাখুন</h1>
                        <QrReader
                            onResult={(result, error) => {
                                if (!!result) {
                                    setData(result?.text);
                                    setCard1(result?.text);
                                }
                                if (!!error) {
                                    console.info(error);
                                }
                            }}
                            style={{ width: '100%' }}

                        />
                    </div>
                }
                {step == 3 && card1 !== '' && card2 == '' &&
                    <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg text-center">

                        <select class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none my-8"
                        value={card2}
                        onChange={(e) => setCard2(e.target.value)}
                        >
                            <option value=''>প্রাপকের কার্ড নির্বাচন করুন</option>
                            {card1!=='red' && <option value='red' className='text-red-500 text-xl font-bold'>লাল খেলোয়াড় </option>}
                            {card1!=='blue' && <option value='blue' className='text-blue-500 text-xl font-bold'>নীল খেলোয়াড়</option>}
                            {card1!=='green' && <option value='green' className='text-green-500 text-xl font-bold' >সবুজ খেলোয়াড়</option>}
                            {card1!=='yellow' && <option value='yellow' className='text-yellow-500 text-xl font-bold' >হলুদ খেলোয়াড়</option>}
                        </select>
                    </div>
                }
                {step == 3 && card1 !== '' && card2 !== '' &&
                    <div className="w-full p-6 bg-white shadow-md rounded-lg text-center items-center">

                        <div className='flex justify-center'>
                            <div className='flex items-center gap-4'>
                                <img src={card1 === 'red' ? red : card1 === 'blue' ? blue : card1 === 'green' ? green : yellow} alt='কার্ড' />
                                <h1 className={`text-2xl font-bold text-center text-${card1}-500`}>{card1 === 'red' ? 'লাল খেলোয়াড়' : card1 === 'blue' ? 'নীল খেলোয়াড়' : card1 === 'green' ? 'সবুজ খেলোয়াড়' : 'হলুদ খেলোয়াড়'}</h1>
                            </div>
                            <div className='mx-8'>
                                <img src={arrow} alt='কার্ড' height={50} width={150} />
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={card2 === 'red' ? red : card2 === 'blue' ? blue : card2 === 'green' ? green : yellow} alt='কার্ড' />
                                <h1 className={`text-2xl font-bold text-center text-${card2}-500`}>{card2 === 'red' ? 'লাল খেলোয়াড়' : card2 === 'blue' ? 'নীল খেলোয়াড়' : card2 === 'green' ? 'সবুজ খেলোয়াড়' : 'হলুদ খেলোয়াড়'}</h1>
                            </div>

                        </div>
                        <div className='flex justify-center gap-6 '>
                            <input className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-2xl text-center"
                                id="username"
                                type="text"
                                placeholder="পরিমান লিখুন"
                                onChange={(e) => setAmount(e.target.value)}
                                value={amount}
                            />
                            <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded-lg font-bold"
                                onClick={transfer}
                            >অর্থ স্থানান্তর করুন</button>
                        </div>
                    </div>
                }
                {step == 0 &&
                    <Menu step={step} setStep={setStep} />
                }
            </div>
        </div>
    );
};

export default QrScanner;
