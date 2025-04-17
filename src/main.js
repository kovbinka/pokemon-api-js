document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('catch');
    const pokemonIdInput = document.getElementById('number');

    fetchButton.addEventListener('click', async () => {
        const id = pokemonIdInput.value;
        if (!id || id < 1) {
            displayError('Please enter a valid Pokemon ID (1 or higher)');
            return;
        }

        try {
            const pokemon = await fetchPokemon(id);
            displayPokemon(pokemon);
        } catch (error) {
            displayError(error.message);
        }
    });
});