import React from 'react';

function PokemonList({ pokemon, searchTerm, setSearchTerm }) {
    const filteredPokemon = pokemon.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getPokemonId = (url) => {
        const parts = url.split('/');
        return parts[parts.length - 2]; // Extracts the ID from the URL
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search Pokemon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="pokemon-container">
                {filteredPokemon.map((p) => (
                    <div key={p.name} className="pokemon-card">
                        <h3>{p.name}</h3>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(p.url)}.png`}
                            alt={p.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokemonList;
