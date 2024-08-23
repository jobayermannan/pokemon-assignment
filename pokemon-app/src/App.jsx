import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => {
                setPokemon(response.data.results);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Pokemon Search</h1>
            <PokemonList pokemon={pokemon} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
    );
}

export default App;

