import React from 'react';

function Product(props) {
    return (
        <div className="product">
            <h3>Name: {props.product.name}</h3>
            <h4>Price: £{props.product.price}</h4>
            <p>Description: {props.product.description}</p>
        </div>
    )

}
export default Product;