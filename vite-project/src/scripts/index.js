// Classe Estilo principal
import "../styles/style.scss";
import { getData } from "./api";

// Requisição à API
getData()
  .then(response => response.json())  // Converte diretamente para JSON
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));