import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const ProductList = ({product, setReload}) => {

    const handleClick = id => {
        console.log(id);
        //TODO : delete resgidtry 

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.value) {

                try {
                    const url = `http://localhost:4000/restaurant/${id}`;

                    const response = await axios.delete(url);

                    if(response.status === 200){
                        Swal.fire(
                            'Deleted!',
                            'The product has been deleted.',
                            'success'
                        )

                        //reload api
                        setReload(true);
                    }
                } catch (error) {
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Something went wrong deleting the product, please try again!'
                    })
                }
            }
        })
    }

    return (  
        <li 
            data-category={product.category} 
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            <p>
                {product.dishName}
                <span className="font-weight-bold mx-2">${product.dishPrice}</span>
                <span className="badge badge-info" >{product.category}</span>
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