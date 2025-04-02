// Classe Estilo principal
import "../styles/style.scss";
import { getData } from "./api";
import { getExtension } from "./extensions";
import { filterCard } from "./filter";

// Requisição à API
getData()
  .then(response => response.json())  // Converte diretamente para JSON
  .then(data => {
    console.log(data);
    getExtension(data);
    filterCard();
    })
  .catch(error => console.error("Error:", error));