import React from 'react';

const Filtre = ({ titre, taux, onFilterChange }) => {
    return (
        <div className="filtre">
            <input type="text" value={titre} onChange={(e) => onFilterChange('titre', e.target.value)} placeholder="Filtrer par titre" />
            <input type="number" value={taux} onChange={(e) => onFilterChange('taux', e.target.value)} placeholder="Filtrer par note" />
        </div>
    );
}

export default Filtre;