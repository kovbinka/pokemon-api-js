
import displayPokemon from "./DisplayPokemon.js";
import displayError from "./DisplayError.js";
import fetchPokemon from "../api/api.js"
import objectsDom from "../components/DomComponents.js";

const handlerFetchButton = async () => {
  const id = objectsDom.pokemonIdInput.value;
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
};

export default handlerFetchButton;