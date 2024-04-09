import React, { useState } from 'react';
import MovieList from './MovieList';
import Filtre from './Filtre';

function App() {
  const [films, setFilms] = useState([
    { titre: "Film 1", description: "Description du Film 1", posterURL: "https://via.placeholder.com/150", note: 7 },
    { titre: "Film 2", description: "Description du Film 2", posterURL: "https://via.placeholder.com/150", note: 8 },
    { titre: "Film 3", description: "Description du Film 3", posterURL: "https://via.placeholder.com/150", note: 9 }
  ]);

  const [filtre, setFiltre] = useState({
    titre: '',
    taux: ''
  });

  const handleFilterChange = (type, value) => {
    setFiltre({ ...filtre, [type]: value });
  };

  const filteredFilms = films.filter(film => {
    const titreMatch = film.titre.toLowerCase().includes(filtre.titre.toLowerCase());
    const tauxMatch = film.note >= filtre.taux || !filtre.taux;
    return titreMatch && tauxMatch;
  });

  return (
    <div className="App">
      <Filtre titre={filtre.titre} taux={filtre.taux} onFilterChange={handleFilterChange} />
      <MovieList films={filteredFilms} />
    </div>
  );
}

export default App;