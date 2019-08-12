import React from 'react';

const Error = ({message}) => (  
    <p className="alert alert-danger p-3 my-5 text-center tex-uppercase font-weight-bold">
        {message}
    </p>
);
 
export default Error;