import React from 'react';

const AddProduct = () => {
    return (  
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Add New Product</h1>

            <form
                className="mt-5"
            >
                <div className="form-group">
                    <label>Dish Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        placeholder="Dish Name"
                    />
                </div>

                <div className="form-group">
                    <label>Dish Price</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="price"
                        placeholder="Dish Price"
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
 
export default AddProduct;