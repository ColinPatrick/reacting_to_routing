import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import CharacterCard from '../components/CharacterCard';

const Characters = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(allPeople => setPeople(allPeople));
    }, []);

    return (
        <div className="d-flex justify-content-center flex-wrap">
            <Navigation /> 
            <CharacterCard people={people} />
        </div>
        
    );

};

export default Characters;