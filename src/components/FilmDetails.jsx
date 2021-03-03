import {useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const FilmCard = () => {
    const { filmid } = useParams();
    const [film, setFilm] = useState({});

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
        .then(res => res.json())
        .then(film => setFilm(film));
    }, []);

    return (
        <div className="d-flex justify-content-center flex-wrap">
            <div className="col-md-6 d-flex justify-content-center" key={`film-id-${film.id}`}>
                <div className="card bg-light col-md-6 rounded shadow my-4 mx-4 d-flex">
                    <div className="card-body">
                        <h4 className="card-title">
                                {film.title}
                        </h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item rounded">Produced by: {film.producer}</li>
                            <li className="list-group-item">Directed by: {film.director}</li>
                            <li className="list-group-item">Released in: {film.release_date}</li>                                  
                        </ul>
                        <hr/>
                        <h6>Plot:</h6>
                        <p>{film.description}</p>
                    </div>
                    <footer className="d-flex justify-content-center">
                        <Link to="/films" className='btn btn-primary mb-4'>
                            Go Back
                        </Link>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default FilmCard;