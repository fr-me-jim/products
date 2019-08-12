import React, { Fragment } from 'react';
import ProductList from './ProductList';

const Products = ({products}) => {
    return (  
        <Fragment>
            <h1 className="text-center">Products List</h1>
            <ul className="list-group mt-5">
                { products.map( product => (
                    <ProductList 
                        key={product.id}
                        product={product}
                    />
                ) ) }
            </ul>
        </Fragment>
    );
}
 
export default Products;