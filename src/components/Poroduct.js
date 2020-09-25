import React from 'react'
import './Product.css';

function Poroduct({image,title, caption, price}) {
    return (
        <div className="product">
            <img src={image} alt=""/>
            <h1>{title}</h1>
            <h2>{caption}</h2>
            <h2>USD {price}</h2>
            <button>ADD TO CART</button>
        </div>
    )
}

export default Poroduct
