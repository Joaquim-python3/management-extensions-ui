export function getExtension(data) {
  const container = document.getElementById("extensions-container");

  container.innerHTML = "";

  data.forEach((extension) => {
    const extensionElement = createExtensionElement(extension);
    container.appendChild(extensionElement);
  });
}

function createExtensionElement(extension) {
  // 1. Card principal
  const card = document.createElement("div");
  card.className = `card ${extension.isActive ? "active" : "inactive"}`; // Classe de status aqui!

  // 2. Topo do card (agora contém logo + conteúdo)
  const topDiv = document.createElement("div");
  topDiv.className = "card__top";

  // 2.1 Logo
  const logo = document.createElement("img");
  logo.className = "card__logo";
  logo.src = extension.logo;
  logo.alt = `${extension.name} logo`;

  // 2.2 Conteúdo (nome + descrição) - AGORA DENTRO DO TOPO
  const contentDiv = document.createElement("div");
  contentDiv.className = "card__content";

  const name = document.createElement("h3");
  name.className = "card__name";
  name.textContent = extension.name;

  const desc = document.createElement("p");
  desc.className = "card__description";
  desc.textContent = extension.description;

  contentDiv.append(name, desc);

  // Adiciona logo e conteúdo ao topo
  topDiv.append(logo, contentDiv);

  // 3. Rodapé do card (status + botão) - SEPARADO
  const footerDiv = document.createElement("div");
  footerDiv.className = "card__footer";

  const status = document.createElement("input");
  status.type = "checkbox";
  status.id = "card-checkbox";
  status.className = `card__status`;

  status.checked = extension.isActive;

  const removeBtn = document.createElement("button");
  removeBtn.className = "card__remove";
  removeBtn.textContent = "Remove";

  footerDiv.append(removeBtn, status);

  // Montagem final
  card.append(topDiv, footerDiv);

  return card;
}
