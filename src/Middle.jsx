import React from 'react';

const Middle = () => {
    return (
        <>
            <div className="pt-10 pb-10 bg-yellow-100 mt-10 flex justify-around items-center">
                <div className=' flex flex-col items-center'>
                    <img src="https://cdn-icons-png.flaticon.com/128/11153/11153403.png" alt="EASY EXCHANGE" className="w-16 h-16" />
                    <p className='mt-5'>EASY EXCHANGE</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://cdn-icons-png.flaticon.com/128/12525/12525437.png" alt="100% HANDPICKED" className="w-16 h-16" />
                    <p className='mt-5'>100% HANDPICKED</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://cdn-icons-png.flaticon.com/128/9375/9375493.png" alt="ASSURED QUALITY" className="w-16 h-16" />
                    <p className='mt-5'>ASSURED QUALITY</p>
                </div>
            </div>
        </>
    );
};

export default Middle;
