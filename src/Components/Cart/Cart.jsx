import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='pt-3'>
            <h2 className={cart.length === 2 ? `orange` : 'purple' }>Cart {cart.length}</h2>
            {
                cart.length === 3 ? <p>Tinta product kineche</p> : undefined
            }
        </div>
    );
};

export default Cart;