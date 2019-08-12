import React from 'react';

const ProductList = ({product}) => {
    return (  
        <li 
            data-category={product.category} 
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            <p>
                {product.dishName} { '  ' }
                <span className="font-weight-bold">${product.dishPrice}</span>
            </p>

            <div>

            </div>
        </li>
    );
}
 
export default ProductList;