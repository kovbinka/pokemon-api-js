function displayPokemon (pokemon) {
    const pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.style.display = 'block';
    pokemonInfo.innerHTML = `
    <h2>${pokemon.name.toUpperCase()}</h2>
    <img class="img-poke" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p><strong>⚡Types: </strong>${pokemon.types.map(type => type.type.name).join(', ').toUpperCase()}</p>
    <p><strong>🏹Stats: </strong></p>
    <ul class="poke-list">
    ${pokemon.stats.map(stat => `<li>${stat.stat.name.toUpperCase()}: ${stat.base_stat}</li>`).join('')}
    </ul>
    `;
}

function displayError(message) {
        const pokemonInfo = document.getElementById('pokemon-info');
        pokemonInfo.innerHTML = `<p style="color: red;">${message}</p>`;
}