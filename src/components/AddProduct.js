import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

import Error from './Error';

const AddProduct = ({history, setReload}) => {

    //state
    const [ dishName, setDishName ] = useState('');
    const [ dishPrice, setDishPrice ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ error, setError ] = useState(false);

    //get selected radio button value
    const handleChange = e => {
        setCategory(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();

        //validation
        if( dishName === '' || dishPrice === '' || category === '' ) {
            setError(true);
            return;
        }

        //all good to go
        setError(false);

        //add new product
        const url = `http://localhost:4000/restaurant`;
        try {
            const response = await axios.post(url, {
                dishName,
                dishPrice,
                category
            });

            if(response.status === 201)
                Swal.fire(
                    'New Product Added!',
                    'The new product has been added!',
                    'success'
                )

        } catch (error) {
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Something went wrong adding the product, please try again!'
            })
        }

        //redirect to /products
        setReload(true);
        history.push('/products');
    }

    return (  
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Add New Product</h1>

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
                        onChange= { e => setDishName(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label>Dish Price</label>
                    <input 
                        type="number" 
                        className="form-control text-body" 
                        name="price"
                        placeholder="Dish Price"
                        onChange= { e => setDishPrice(e.target.value) }
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
                    value="Add Product" 
                />
            </form>
        </div>
    );
}
 
export default withRouter(AddProduct);