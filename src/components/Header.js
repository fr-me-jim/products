import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (  
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <Link to="/products" className="navbar-brand" >
                React CRUD & Routing
            </Link>
        </div>
    </nav>
);
 
export default Header;
