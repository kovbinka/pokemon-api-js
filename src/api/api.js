const responseURL = 'https://pokeapi.co/api/v2/pokemon';

async function fetchPokemon(id) {
    try{
        const response = await fetch(`${responseURL}/${id}`);
        if (!response.ok){
            throw new Error('Pokemon not found');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch Pokemon: ${error.message}`);
    }
}