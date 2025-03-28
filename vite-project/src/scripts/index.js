// Classe Estilo principal
import "../styles/style.scss";
import { getData } from "./api";
import { getExtension } from "./extensions";

// Requisição à API
getData()
  .then(response => response.json())  // Converte diretamente para JSON
  .then(data => {
    console.log(data);
    getExtension(data); 
    })
  .catch(error => console.error("Error:", error));