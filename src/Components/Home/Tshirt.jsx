import React from 'react';

const Tshirt = ({product, handelAddToCart}) => {
    const {img, name, price} = product;

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <button onClick={()=> handelAddToCart(product)} href="#" className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    );
};

export default Tshirt;