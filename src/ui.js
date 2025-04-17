function displayPokemon (pokemon) {
    const pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.innerHTML = `
    <h2>${pokemon.name.toUpperCase()}</h2>
    <img srс="${pokemon.sprites.front_default}">
    <p><strong>Types: </strong>${pokemon.types.map(type => type.type.name).join(', ')}</p>
    <p><strong>Stats: </strong></p>
    <ul>
    ${pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
    </ul>
    `;
}

function displayError(message) {
        const pokemonInfo = document.getElementById('pokemon-info');
        pokemonInfo.innerHTML = `<p style="color: red;">${message}</p>`;
}