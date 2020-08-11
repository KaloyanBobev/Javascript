import React from 'react';

import productData from './vschoolProducts';
import Product from './components/Product';
function App() {
    const productComponents = productData.map((item) => {
        return (
            <Product key={item.id} product={item} />
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