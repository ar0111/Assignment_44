import React, { createContext, useState } from 'react';
import './GrandFather.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Fufi from '../Fufi/Fufi';

export const MoneyContext = createContext(55);
export const RingContext = createContext('Matir Ring');

const GrandFather = () => {
    const [money, setMoney] = useState(5000);
    const [house, setHouse] = useState(555);

    return (
        <div className='common'>
            <h1>Dadu: {money}</h1>
            <h1>Dadu: {house}</h1>
            <div className='d-flex justify-content-between'>
                <RingContext.Provider value={[house, setHouse]}>
                    <MoneyContext.Provider value={[money, setMoney]}>
                        <Father></Father>
                        <Uncle></Uncle>
                        <Fufi></Fufi>
                    </MoneyContext.Provider>
                </RingContext.Provider>
            </div>
        </div>
    );
};

export default GrandFather;