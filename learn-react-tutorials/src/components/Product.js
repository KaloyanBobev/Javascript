import React from 'react';

function Product(props) {
    return (
        <div className="product">
            <h3>Name: {props.name}</h3>
            <h4>Price: {props.price}</h4>
            <p>Description: {props.description}</p>
        </div>
    )

}
export default Product;