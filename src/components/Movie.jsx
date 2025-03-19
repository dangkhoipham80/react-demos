import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";

const Movie = () => {
    let ids = 0;
    const [movies, setMovies] = useState([
        { id: ids++, title: 'Dragonball', ratings: 9.8 },
        { id: ids++, title: 'Doraemon', ratings: 8.2 },
        { id: ids++, title: 'Conan', ratings: 8.7 },
    ])
    const [newRatings, setNewRatings] = useState('');
    const [error, setError] = useState('');
    const [selectedMovieId, setSelectedMovieId] = useState(null); // To track which movie is being updated

    const changeRatings = (id) => {
        // Check if input is empty
        if (newRatings === '') {
            setError('Please enter a rating');
            return;
        }

        const rating = parseFloat(newRatings);

        if (isNaN(rating)) {
            setError('Please enter a valid number');
        } else if (rating < 0 || rating > 10) {
            setError('Rating must be between 0 and 10');
        } else {
            setMovies(movies.map(m => m.id === id ? { ...m, ratings: rating} : m));
            setError('');
            setSelectedMovieId(null);
            setNewRatings('');
        }
    };

    const handleRatings = (e) => {
        setNewRatings(e.target.value);
        setError('');
    }

    const handleEdit = (id) => {
        setSelectedMovieId(id);
        setError('');
    }

  return (
    <div>
        <h1>TOP MOVIES</h1>
        {movies.map(m => (
            <div key={m.id}>
                <h2>{m.title}</h2>
                <p>Ratings: {m.ratings} <CiStar /></p>
                {selectedMovieId === m.id && (
                    <>
                        <input
                            type="text"
                            value={newRatings}
                            onChange={handleRatings}
                            placeholder="Enter new ratings"
                        />
                        <button onClick={() => changeRatings(m.id)}>Change</button>
                    </>
                )}
                {selectedMovieId !== m.id && (
                    <button onClick={() => handleEdit(m.id)}>Update Rating</button>
                )}
                {selectedMovieId === m.id && error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        ))}
    </div>
  )
}

export default Movie