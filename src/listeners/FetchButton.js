import objectsDom from "../components/DomComponents.js";
import handlerFetchButton from "../handlers/FetchButton.js";

const listenFetchButton = () => {
  objectsDom.fetchButton.addEventListener('click', handlerFetchButton);
};

export default listenFetchButton;
