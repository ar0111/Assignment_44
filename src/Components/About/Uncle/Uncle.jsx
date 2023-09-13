import React, { useContext } from 'react';
import { RingContext } from '../GrandFather/GrandFather';

const Uncle = () => {
    const house = useContext(RingContext);

    return (
        <div className='common'>
            <h1>Uncle: {house}</h1>
        </div>
    );
};

export default Uncle;