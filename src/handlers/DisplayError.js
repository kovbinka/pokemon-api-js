function displayError(message) {
  const pokemonInfo = document.getElementById('pokemon-info');
  pokemonInfo.innerHTML = `<p style="color: red;">${message}</p>`;
}

export default displayError;