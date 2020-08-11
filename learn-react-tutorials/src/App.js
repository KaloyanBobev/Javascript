import React from 'react';

import productData from './vschoolProducts';
import Product from './components/Product';
function App() {
    const productComponents = productData.map((prod) => {
        return (
            <Product
                key={prod.id}
                name={prod.name}
                price={prod.price}
                description={prod.description}
            />

        )
    }

    )
    return (
        <div className="container">
            {productComponents}
        </div>
    )
}


export default App;