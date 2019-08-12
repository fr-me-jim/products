import React from 'react';
import { Link } from 'react-router-dom';


const ProductList = ({product}) => {

    const handleClick = id => {
        console.log(id);
        //TODO : delete resgidtry   
    }

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
                <Link 
                    to={`/products/edit/${product.id}`}
                    className="btn btn-success mr-2"
                > Edit </Link>

                <button 
                    type="submit"
                    className="btn btn-danger"
                    onClick={ () => handleClick(product.id) }
                > Delete &times; </button>

            </div>
        </li>
    );
}
 
export default ProductList;