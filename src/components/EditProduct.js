import React, { useState, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

import Error from './Error';


const EditProduct = (props) => {

    const { history, product, setReload } = props;

    //ref
    const dishName = useRef('');
    const dishPrice = useRef('');

    //state
    const [ category, setCategory ] = useState('');
    const [ error, setError ] = useState(false);

    const handleChange = e => {
        setCategory(e.target.value);

    }

    const handleSubmit = async e => {
        e.preventDefault();

        //validation
        const newName = dishName.current.value;
        const newPrice = dishPrice.current.value;
        if( newName === '' || newPrice === '' || category === '' ) {
            setError(true);
            return;
        }

        //all good to go
        setError(false);

        //check if category was changed or not
        let finalCategory = (category === '') ? product.category : category;

        //get data from form
        const editedProduct = {
            dishName : newPrice,
            dishPrice : newPrice,
            category : finalCategory
        }

        //send request
        const url = `http://localhost:4000/restaurant/${product.id}`;

        try {
            const response = await axios.put(url, editedProduct);

            if(response.status === 200)
                Swal.fire(
                    'Product Edited!',
                    'The product has been edited!',
                    'success'
                )

        } catch (error) {
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Something went wrong editing the product, please try again!'
            })
        }

        //redirect to /products
        setReload(true);
        history.push('/products');
    }

    return (  
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Edit Product</h1>

            { error ? <Error message="All fields are mandatory!" /> : null }

            <form
                className="mt-5"
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label>Dish Name</label>
                    <input 
                        type="text" 
                        className="form-control text-body" 
                        name="name" 
                        placeholder="Dish Name"
                        ref={dishName}
                        defaultValue={product.dishName}
                    />
                </div>

                <div className="form-group">
                    <label>Dish Price</label>
                    <input 
                        type="number" 
                        className="form-control text-body" 
                        name="price"
                        placeholder="Dish Price"
                        ref={dishPrice}
                        defaultValue={product.dishPrice}
                    />
                </div>

                <legend className="text-center">Category:</legend>
                <div className="text-center">
                    <div className="form-check form-check-inline">
                        <input 
                            id="dessert"
                            className="form-check-input" 
                            type="radio" 
                            name="category"
                            value="dessert"
                            onChange={handleChange}
                            defaultChecked={ (product.category === 'dessert') }
                        />
                        <label 
                            htmlFor="dessert"
                            className="form-check-label"
                        >
                            Dessert
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            id="drink"
                            className="form-check-input" 
                            type="radio" 
                            name="category"
                            value="drink"
                            onChange={handleChange}
                            defaultChecked={ (product.category === 'drink') }
                        />
                        <label 
                            htmlFor="drink"
                            className="form-check-label"
                        >
                            Drink
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input 
                            id="cuts"
                            className="form-check-input" 
                            type="radio" 
                            name="category"
                            value="cuts"
                            onChange={handleChange}
                            defaultChecked={ (product.category === 'cuts') }
                        />
                        <label 
                            htmlFor="cuts"
                            className="form-check-label"
                        >
                            Cuts
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input 
                            id="salat"
                            className="form-check-input" 
                            type="radio" 
                            name="category"
                            value="salat"
                            onChange={handleChange}
                            defaultChecked={ (product.category === 'salat') }
                        />
                        <label 
                            htmlFor="salat"
                            className="form-check-label"
                        >
                            Salat
                        </label>
                    </div>
                </div>

                <input 
                    type="submit" 
                    className="font-weight-bold text-uppercase mt-5 btn btn-info btn-block py-3" 
                    value="Edit Product" 
                />
            </form>
        </div>

    );
}
 
export default withRouter(EditProduct);