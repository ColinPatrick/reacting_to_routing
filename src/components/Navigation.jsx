import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="d-flex col-sm-12 justify-content-center">
            <Link to="/films" className="btn btn-primary my-4 mx-4">
                Films
            </Link>
            <Link to="/" className="btn btn-primary my-4 mx-4">
                Home
            </Link>
            <Link to="/characters" className="btn btn-primary my-4 mx-4">
                Characters
            </Link>
        </div>
    );
};

export default Navigation;