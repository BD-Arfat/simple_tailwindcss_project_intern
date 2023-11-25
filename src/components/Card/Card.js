import React from 'react';

const Card = ({ card }) => {
    return (
        <div>
            <div className='md:w-[670px] w-[80%] bg-red-500 mx-auto my-8 p-10 rounded-xl shadow-xl font-montserrat relative md:pl-48  pt-52 md:pt-10'>
                <div className='absolute md:-left-16 left-0 md:h-full md:top-0 -top-8 md:w-[250px] w-full flex items-center justify-center'>
                    <img className='rounded-xl shadow-lg w-[90%] h-52 object-cover md:w-[190px]' src={card.picture.large} alt="" />
                </div>
                <div className='flex gap-10 font-bold text-xl'>
                <h1>FirstName : {card.name.first}</h1>
                <h1>FirstName : {card.name.last}</h1>
                </div>
                <p className='mt-3 text-lg font-bold text-white'>
                    Gender : {card.gender}
                </p>
                <p className='mt-2 text-sm font-bold '>
                    Phone : {card.phone}
                </p>
                <div className='gap-3 flex mt-6'>
                    <button className='bg-slate-950 text-white px-8 py-2 font-black hover:scale-105 ease-out duration-500'>See More</button>
                    <button className='text-slate-950 bg-white px-8 py-2 font-black hover:scale-105 ease-out duration-500'>All Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;