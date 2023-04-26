import { useState } from 'react';
import bird from '../images/bird.svg';
import cat from '../images/cat.svg';
import cow from '../images/cow.svg';
import dog from '../images/dog.svg';
import gator from '../images/gator.svg';
import heart from '../images/heart.svg';
import horse from '../images/horse.svg';

const svgMap = { bird, cat, cow, dog, gator, horse }

// eslint-disable-next-line react/prop-types
const AnimalShow = ({ type }) => {
    const [heartSize, setHeartSize] = useState(30);

    const handleHeartClick = () => {
        setHeartSize(heartSize + 5);
    }

    return (
        <>
            <div className='flex flex-col justify-end items-center w-[250px] h-[350px] border-2 border-slate-300 bg-purple-100 shadow-xl rounded-lg'>
                <img src={svgMap[type]} alt="img" className='mb-24 p-5' />
                <img src={heart} alt="" width={heartSize} height={heartSize} className='mb-10 absolute' onClick={handleHeartClick} />
            </div>
        </>
    );
}

export default AnimalShow;