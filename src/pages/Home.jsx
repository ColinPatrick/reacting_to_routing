import React from 'react';
import Navigation from '../components/Navigation.jsx'
const Home = () => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            <Navigation />
            <div className="d-flex col-sm-12 justify-content-center">
                <img className="my-4" alt="ghibli_pic" src="https://upload.wikimedia.org/wikipedia/en/c/ca/Studio_Ghibli_logo.svg" style={{height: 400}} />
            </div>
        </div>
    );
};

export default Home;