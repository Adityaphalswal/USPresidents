import React from 'react';
const Card = (props) => {
    const {name,description,wikipedia,term,party,life} = props.president;
    const {startYear,endYear,served} = term;
    const{birthYear,deathYear} = life;
    const date = new Date()
    if(served < 0.5) {
        return ``;
    } else { return (
    <div className='card flex flex-col h-96 w-64 rounded-lg overflow-hidden bg-slate-100 drop-shadow-md p-4 hover:scale-105 text-center justify-center transition-all '>
    <h1 className='text-xl text-blue-900 font-medium'>{name}</h1>
    <div className='flex flex-row text-blue-900 justify-center'>
    <h1>{startYear} - </h1>
    <h1> {endYear}</h1>
    </div>
    <h2 className='desc text-gray-500 text-sm'>{description}</h2>
    <div className='flex flex-row flex-wrap justify-center gap-2 py-2'>
    <h1 className='text-white rounded-lg bg-blue-900 p-2 ' >{party}</h1>
    <h1 className='text-blue-900 rounded-lg bg-white border-2 border-blue-900 p-2' >{deathYear ? `${deathYear - birthYear}` : `${date.getFullYear()-birthYear}`} Age</h1>
    <a href={wikipedia} className="text-white rounded-lg bg-blue-900 p-2">Full Bio</a>
    <h1 className='text-blue-900 rounded-lg bg-white border-2 border-blue-900 p-2' >{served} time</h1>
    </div>
    </div>)}
}

export default Card