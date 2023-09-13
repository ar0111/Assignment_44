import React, { useContext } from 'react';
import { RingContext } from '../GrandFather/GrandFather';

const FufiSister = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div className='common'>
            <h1>Sister: </h1>
            <button className='btn btn-outline-success border-2' onClick={()=> setHouse(house + 1)}>House Increase</button>
        </div>
    );
};

export default FufiSister;