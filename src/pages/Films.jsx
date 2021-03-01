import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import FilmCard from '../components/FilmCard';

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(allFilms => setFilms(allFilms));
    }, []);

    return (
        <div className="d-flex justify-content-center flex-wrap">
                <Navigation />
                <FilmCard films={films} />
        </div>
    );
};

export default Films;