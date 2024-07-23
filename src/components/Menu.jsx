import React from 'react'

function Menu({ step, setStep }) {
    return (
        <div className="w-full bg-white rounded-lg flex flex-col p-8 pb-12 justify-center items-center">
            <h1 className='text-3xl font-bold mt-4 mb-6'>ব্যাংকিং সুবিধা</h1>
            <button className="px-4 py-2 mt-4 w-1/2 text-white bg-red-500 rounded-lg font-bold text-lg"
            onClick={() => setStep(3)}
            >
                অর্থ স্থানান্তর</button>
            <button className="px-4 py-2 mt-4 w-1/2 text-white bg-green-500 rounded-lg font-bold text-lg"
            onClick={() => setStep(2)}
            >
                টাকা তোলা</button>
            <button className="px-4 py-2 mt-4 w-1/2 text-white bg-orange-500 rounded-lg font-bold text-lg"
            onClick={() => setStep(1)} 
            >
                টাকা জমা</button>
        </div>
    )
}

export default Menu